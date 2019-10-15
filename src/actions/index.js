import { SEARCH_FOR_ITEMS, GET_FEATURED_ITEM }  from './actionTypes';
import { FIND_API_BASE } from '../constants';

export const searchForTodos = (keywords) => async dispatch => {
    const req = await fetch(`${FIND_API_BASE}?keywords=${keywords}`);
    const res = await req.json()

    dispatch({
        type: SEARCH_FOR_ITEMS,
        payload: res
    })
}

export const getFeaturedItem = ( keywords ) => async dispatch => {
    const res = await fetch(`${FIND_API_BASE}?keywords=${keywords}`);
    
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
    

    var ebayResults = {
        featuredItem: featuredItem,
        relatedItems: item
    }
    // console.log(resJson)

    dispatch({
        type: GET_FEATURED_ITEM,
        payload: ebayResults
    })
}