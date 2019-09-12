import {
    RECEIVE_ALL_PLAYLISTS,
    RECEIVE_ONE_PLAYLIST,
    REMOVE_ONE_PLAYLIST
} from '../actions/playlist_actions';
import { RECEIVE_ALL_SEARCHES, CLEAR_SEARCH } from '../actions/search_actions';

const playlistReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists
        case RECEIVE_ONE_PLAYLIST:
            return Object.assign({}, oldState, action.payload.playlist_songs);
        case REMOVE_ONE_PLAYLIST:
            let newState = Object.assign({}, oldState);
            delete newState[action.playlist.id];
            return newState;
        case RECEIVE_ALL_SEARCHES:
            if (action.playlists === undefined) {
                return oldState;
            }
            return Object.assign({}, oldState, action.playlists);
        default:
            return oldState;
    }
}

export default playlistReducer;