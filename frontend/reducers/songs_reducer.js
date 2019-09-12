import {
    RECEIVE_ALL_SONGS,
    RECEIVE_ONE_SONG
} from '../actions/music_actions';
import { RECEIVE_ALL_SEARCHES, CLEAR_SEARCH } from '../actions/search_actions';
import { RECEIVE_ONE_PLAYLIST } from '../actions/playlist_actions';

// MIGHT NEED, RECEIVE_ONE_ALBUM, RECEIVE_ONE_ARTIST, RECEIVE_ONE_PLAYLIST CASES

const songReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs
        case RECEIVE_ONE_SONG:
            return Object.assign({}, oldState, { [action.payload.song.id]: action.payload.song });
        case RECEIVE_ALL_SEARCHES:
            if (action.playlists === undefined) {
                return oldState;
            }
            return Object.assign({}, oldState, action.playlists);
        case RECEIVE_ONE_PLAYLIST:
            return Object.assign({}, oldState, action.payload.songs);
        default:
            return oldState;
    }
}

export default songReducer;