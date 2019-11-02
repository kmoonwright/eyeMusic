import {
    RECEIVE_ALL_PLAYLIST_SONGS,
    RECEIVE_ONE_PLAYLIST_SONG,
} from '../actions/playlist_actions';
import { RECEIVE_ALL_SEARCHES, CLEAR_SEARCH } from '../actions/search_actions';

const playlistSongsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLIST_SONGS:
            return action.playlist_songs
        case RECEIVE_ALL_SEARCHES:
            if (action.playlists_songs === undefined) {
                return oldState;
            }
            return Object.assign({}, oldState, action.playlists_songs);
        default:
            return oldState;
    }
}

export default playlistSongsReducer;