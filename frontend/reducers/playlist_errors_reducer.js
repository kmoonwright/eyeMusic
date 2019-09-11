import { RECEIVE_PLAYLIST_ERRORS } from '../actions/playlist_actions';

const playlistErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PLAYLIST_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
}

export default playlistErrorsReducer;
