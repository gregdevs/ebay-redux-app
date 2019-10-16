import React from 'react';
import { getItem, setSort } from '../../../actions';
import AuctionItem from '../../common/AuctionItem';
import FeatureModule from './FeatureModule';
import RelatedModule from './RelatedModule';
import { connect } from 'react-redux';
import { itemParser } from '../../../helpers';
import styles from './FeaturedAuctionPage.module.scss';
import { GET_ITEMS, SORT_BY } from '../../../actions/actionTypes';
import { BUTTONS_MAP } from '../../../constants';

class FeaturedAuctionPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentWillMount() {
        //prevent React Router from re rendering on back browser btn
        if (!this.props.featuredItem){
            this.handleGetItemAction('EndTimeSoonest');
        }
    }

    handleLocalSort = (sortType, parsedItems) => {
        if (sortType === 'alpha'){
            parsedItems.sort((a, b) => a.title.localeCompare(b.title));
        } 
        else if (sortType === 'reversealpha'){
            parsedItems.sort((a, b) => b.title.localeCompare(a.title));
        }     
        else if (sortType === 'lowhigh') {                   
            parsedItems.reverse();
        }  
        return parsedItems;      
    }

    handleGetItemAction = (sortByType) => {
        const { keyword } = this.props.match.params;
        const searchFor = keyword || `funco pop marvel`;
        this.props.getItem( {keywords: searchFor, sortBy: sortByType}, GET_ITEMS );      
        
    }
    sortBy = ( type ) => {
        if (type === 'highlow' || type === 'lowhigh') {
            const { keyword } = this.props.match.params;
            const searchFor = keyword || `funco pop marvel`;
            this.props.getItem( {keywords: searchFor, sortBy: 'CurrentPriceHighest', sortType: type}, GET_ITEMS );        
            // Do nothing since we get the highest via sortOrder param in the initial call
        }  
        else {
            this.props.setSort({  sortType: type }, SORT_BY );
        }          
    } 

    render() {
        let { featuredItem, relatedItems, sortType } =  this.props;
        let parsedItems =  (typeof relatedItems !== 'undefined') ?  relatedItems.map( (item) => itemParser(item)) : null,
            featuredItemDetail = itemParser(featuredItem),
            related_items_markup;

            if (typeof parsedItems !== 'undefined' && parsedItems){
                related_items_markup = this.handleLocalSort(sortType, parsedItems).map( (rItem, ix) => {
                    return (
                        <li key={`${rItem.id}-${ix}`}>
                            <AuctionItem  currentPrice={ rItem.currentPrice }  modType={'related'} id={rItem.id} imageSrc={rItem.imageSrc} title={ rItem.title } condition={ rItem.conditionDisplayName } timeLeft={ rItem.timeLeft }  />
                        </li>
                    )
                }) ;        
            }
            const sortButtons = BUTTONS_MAP.map( (btn) => {
               const type = Object.keys(btn).toString();
               const val = Object.values(btn);
                   return( 
                    <button className={styles.button} onClick={() => this.sortBy(type)}> {val} </button>
                   )
                });

            return (
                <div className={styles.featureContainer}>
                    <FeatureModule featuredItemDetail={featuredItemDetail}/>
                    <RelatedModule sortButtons={sortButtons} relatedItemsMarkup={related_items_markup}/>
                </div>
            )
    }

}

const mapStateToProps =  state => {
    return {
        featuredItem: state.ebayResults.featuredItem,
        relatedItems: state.ebayResults.relatedItems,
        sortType : state.ebayResults.sortType 
    } 
 }

export default connect(mapStateToProps, { getItem , setSort })(FeaturedAuctionPage);