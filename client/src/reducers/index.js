/**
 * This is the root reducer, the point of this is to be a meeting point for all the reducers. So far we just have one reducer, 
 * but if we were to add more this will be the place we're they will come together.
 */

 import {combineReducers} from 'redux';
 import itemReducer from './itemReducer';

 export default combineReducers({
item: itemReducer
 });
