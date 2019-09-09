import {
    RECEIVE_ALL_SONGS,
    RECEIVE_ONE_SONG
} from '../actions/music_actions';

// MIGHT NEED, RECEIVE_ONE_ALBUM, RECEIVE_ONE_ARTIST, RECEIVE_ONE_PLAYLIST CASES

const songReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs
        case RECEIVE_ONE_SONG:
            return Object.assign({}, oldState, { [action.payload.song.id]: action.payload.song });
        default:
            return oldState;
    }
}

export default songReducer;