import {
    RECEIVE_ALL_ALBUMS,
    RECEIVE_ONE_ALBUM
} from '../actions/music_actions';
import { RECEIVE_ALL_SEARCHES, CLEAR_SEARCH } from "../actions/search_actions";


const albumsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
         return action.albums
        case RECEIVE_ONE_ALBUM:
            return Object.assign({}, oldState, { [action.payload.album.id]: action.payload.album });
        case RECEIVE_ALL_SEARCHES:
            if (action.albums === undefined) {
                return oldState;
            }
            return Object.assign({}, oldState, action.albums);
        default:
            return oldState;
    }
}

export default albumsReducer;