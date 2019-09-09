import {
    RECEIVE_ALL_PLAYLISTS,
    RECEIVE_ONE_PLAYLIST
} from '../actions/music_actions';

const playlistReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists
        case RECEIVE_ONE_PLAYLIST:
            return Object.assign({}, oldState, { [action.payload.playlist.id]: action.payload.playlist });
        default:
            return oldState;
    }
}

export default playlistReducer;