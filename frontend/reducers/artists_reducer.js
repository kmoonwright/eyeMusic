import {
    RECEIVE_ALL_ARTISTS,
    RECEIVE_ONE_ARTIST
} from '../actions/music_actions';

const artistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists
        case RECEIVE_ONE_ARTIST:
            return Object.assign({}, oldState, { [action.payload.artist.id]: action.payload.artist });
        default:
            return oldState;
    }
}

export default artistsReducer;