import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import musicPlayerReducer from './music_player_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
    search: searchReducer,
    musicPlayer: musicPlayerReducer,
    modal: modalReducer,
});