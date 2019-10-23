import { GET_ITEMS, CURRENT_ITEM }  from './actionTypes';

import { FIND_API_BASE } from '../constants';

export const setSort = ( args, type ) => dispatch => {
    const { sortType } = args;
    
    dispatch({
        type: type,
        payload: {sortType}
    });
}

export const getItem = ( args, type ) => async dispatch => {
    var obj;
    const { keywords, sortBy, sortType  } = args
    const res = await fetch(`${FIND_API_BASE}?keywords=${keywords}&sortBy=${sortBy}`);

    if (res.status >= 400) {
        throw new Error("Bad response from server");
    }
    const resJson = await res.json();

     let findItemsAdvancedResponse = resJson && resJson.findItemsAdvancedResponse[0],
        searchResult = findItemsAdvancedResponse && findItemsAdvancedResponse.searchResult[0],
        item = searchResult && searchResult.item,
        itemsLength = item && item.length;

    const randomIndex = Math.floor(Math.random() * itemsLength) + 1;
    const featuredItem = item[randomIndex] || null;
    
    if (type === GET_ITEMS && sortBy === 'EndTimeSoonest'){
        obj = {
            featuredItem: featuredItem,
            relatedItems: item,
            sortType: sortType
        }
    }  
    else if (type === GET_ITEMS && sortBy !== 'EndTimeSoonest') {
        obj = {
            relatedItems: item,
            sortType: sortType
        }
    }
    else if (type === CURRENT_ITEM){
        obj = {
            currentItem: item[0],
        }       
    }

    dispatch({
        type: type,
        payload: obj
    })
}