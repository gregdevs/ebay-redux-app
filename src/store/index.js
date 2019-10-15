import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import getFeaturedItemReducer from  '../reducers/getFeaturedItemReducer';


const rootReducer = combineReducers({
    ebayResults: getFeaturedItemReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;