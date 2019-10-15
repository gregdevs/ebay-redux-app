import { GET_FEATURED_ITEM }  from '../../actions/actionTypes';

export default (state = [], { type, payload }) =>  {
    switch(type){
        case GET_FEATURED_ITEM:
        return payload;
          

        default:
        return state;
    }
}