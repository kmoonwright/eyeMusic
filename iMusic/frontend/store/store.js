import { createStore, applyMiddleware } from 'redux';

import RootReducer from '../reducers/root';
import thunk from '../thunk/thunk';

export default (preloadedState = {}) => {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk))
}