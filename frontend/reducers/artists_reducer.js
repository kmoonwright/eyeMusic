import {
    RECEIVE_ALL_ARTISTS,
    RECEIVE_ONE_ARTIST
} from '../actions/music_actions';
import { RECEIVE_ALL_SEARCHES, CLEAR_SEARCH } from '../actions/search_actions';
import { RECEIVE_ONE_PLAYLIST } from '../actions/playlist_actions';

const artistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists
        case RECEIVE_ONE_ARTIST:
            return Object.assign({}, oldState, { [action.payload.artist.id]: action.payload.artist });
        case RECEIVE_ALL_SEARCHES:
            if (action.artists === undefined) {
                return oldState;
            }
            return Object.assign({}, oldState, action.artists);
        case RECEIVE_ONE_PLAYLIST:
            return Object.assign({}, oldState, { [action.payload.artist.id]: action.payload.artist });
        default:
            return oldState;
    }
}

export default artistsReducer;