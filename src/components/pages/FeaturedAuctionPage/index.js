import React from 'react';
import { getFeaturedItem } from '../../../actions';
import AuctionItem from './AuctionItem';
import { connect } from 'react-redux';
import { itemParser } from '../../../helpers';
import styles from './FeaturedAuctionPage.module.scss';
 
class FeaturedAuctionPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sortBy: ''
        }
    }

    componentWillMount() {
        const { keyword } = this.props.match.params;
        const searchFor = keyword || `funco pop marvel`;
        //prevent React Router from re rendering on back browser btn
        if (!this.props.featuredItem){
            this.props.getFeaturedItem( searchFor )      
        }
    }


    sortBy = ( type ) => {
       this.setState({ sortBy : type })
    } 

    render() {
        let { featuredItem, relatedItems } =  this.props;
        const { sortBy } = this.state;

        const parsedItems =  (typeof relatedItems !== 'undefined') ?  relatedItems.map( (item) => itemParser(item)) : null,
            itemDetail = itemParser(featuredItem);

        let related_items_markup;
            
            if (typeof parsedItems !== 'undefined' && parsedItems){
                if (sortBy === 'alpha'){
                    parsedItems.sort((a, b) => (a.title > b.title) ? 1 : -1)
                } 
                else if (sortBy === 'reversealpha'){
                    parsedItems.sort((a, b) => (a.title > b.title) ? -1 : 1)
                }
                else if (sortBy === 'highlow') {
                    // Do nothing since we get the highest via sortOrder param in the initial call
                }
                else if (sortBy === 'lowhigh') {
                    parsedItems.reverse();
                }                
                related_items_markup = parsedItems.map( (rItem, ix) => {
                    return (
                        <li key={`${rItem.id}-${ix}`}>
                            <AuctionItem  currentPrice={ rItem.currentPrice }  modType={'related'} id={rItem.id} imageSrc={rItem.imageSrc} title={ rItem.title } condition={ rItem.conditionDisplayName } timeLeft={ rItem.timeLeft }  />
                        </li>
                    )
                }) ;
        
            }


            return (
                <React.Fragment>
                    <AuctionItem currentPrice={ itemDetail.currentPrice }  modType={'featured'} id={itemDetail.id} imageSrc={itemDetail.imageSrc} title={ itemDetail.title } condition={ itemDetail.conditionDisplayName } timeLeft={ itemDetail.timeLeft }  />
                    <button className={styles.button} onClick={() => this.sortBy('alpha')}> Sort A-Z </button>
                    <button className={styles.button} onClick={() => this.sortBy('reversealpha')}> Sort Z-A </button>
                    <button className={styles.button} onClick={() => this.sortBy('highlow')}> Sort Highest to Lowest </button>
                    <button className={styles.button} onClick={() => this.sortBy('lowhigh')}> Sort Lowest to Highest </button>

                    <ul className={styles.relatedList}>
                      {  related_items_markup }  
                    </ul>
                </React.Fragment>
            )
    }

}

const mapStateToProps =  state => {
    return {
        featuredItem: state.ebayResults.featuredItem,
        relatedItems: state.ebayResults.relatedItems
    } 
 }


export default connect(mapStateToProps, { getFeaturedItem })(FeaturedAuctionPage);