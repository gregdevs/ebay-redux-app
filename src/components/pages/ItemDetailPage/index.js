import React from 'react';
import { connect } from 'react-redux';
import { getItem } from '../../../actions';
import { CURRENT_ITEM } from '../../../actions/actionTypes';
import { itemParser } from '../../../helpers';
import AuctionItem  from '../../common/AuctionItem';

class ItemDetailPage extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        const { currentItem } = this.props;
        if ( !currentItem || currentItem.itemId[0] !== id ){
            this.props.getItem( {keywords: id, sortBy: null}, CURRENT_ITEM );      
        }
    }

    render() {
        const { currentItem } = this.props,
            currentItemDetail = itemParser(currentItem);

        return(
            <React.Fragment>
                <h1>Item Detail</h1>
                <AuctionItem linkoff={true} currentPrice={ currentItemDetail.currentPrice }  modType={'featured'} id={currentItemDetail.id} imageSrc={currentItemDetail.imageSrc} title={ currentItemDetail.title } condition={ currentItemDetail.conditionDisplayName } timeLeft={ currentItemDetail.timeLeft }  />
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        currentItem: state.ebayResults.currentItem
    }
}
export default connect(mapStateToProps, { getItem } )(ItemDetailPage);