import { GET_ITEMS, CURRENT_ITEM, SORT_BY }  from '../../actions/actionTypes';

export default (state = [], { type, payload }) =>  {
    switch(type){
        case GET_ITEMS:
        case CURRENT_ITEM:
            //check to ensure feat item state exists
            if (state.featuredItem){ 
                return {...state, ...payload}
            } 
            else {
                return payload;  
            }

        case SORT_BY:
            return {...state, ...payload};

        default:
            return state;
    }
}