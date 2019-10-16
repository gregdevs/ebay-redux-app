import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import getItemsReducer from  '../reducers/getItemsReducer';

const rootReducer = combineReducers({
    ebayResults: getItemsReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;