import { combineReducers } from 'redux';
import SearchReducer from './search_reducer';

export default combineReducers({
    search: searchReducer,
});