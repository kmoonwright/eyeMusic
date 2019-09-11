import {
    RECEIVE_ALL_PLAYLISTS,
    RECEIVE_ONE_PLAYLIST,
    REMOVE_ONE_PLAYLIST
} from '../actions/playlist_actions';

const playlistReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists
        case RECEIVE_ONE_PLAYLIST:
            return Object.assign({}, oldState, { [action.payload.playlist.id]: action.payload.playlist });
        case REMOVE_ONE_PLAYLIST:
            let newState = Object.assign({}, oldState);
            delete newState[action.playlist.id];
            return newState;
        default:
            return oldState;
    }
}

export default playlistReducer;