import {
    RECEIVE_ALL_ALBUMS,
    RECEIVE_ONE_ALBUM
} from '../actions/music_actions';

const albumsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
         return action.albums
        case RECEIVE_ONE_ALBUM:
            return Object.assign({}, oldState, { [action.payload.album.id]: action.payload.album });
        default:
            return oldState;
    }
}

export default albumsReducer;