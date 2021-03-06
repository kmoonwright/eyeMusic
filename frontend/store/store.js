import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import RootReducer from '../reducers/root_reducer.js';
import thunk from 'redux-thunk';

// with REDUX LOGGER
// export default (preloadedState = {}) => {
//     return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
// }

// without REDUX LOGGER
export default (preloadedState = {}) => {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk))
}