import {
    SET_CURRENT_SONG,
    TOGGLE_SONG,
    SET_QUEUE,
    ADD_TO_QUEUE,
    TOGGLE_SHUFFLE
} from '../actions/music_player_actions';

const nullState = {
    currentSong: {},
    playing: false,
    queue: [],
    shuffle: false
};

const musicPlayerReducer = (oldState = nullState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case SET_CURRENT_SONG:
            newState.playing = false;
            newState.currentSong = action.song;
            return newState;
        case TOGGLE_SONG:
            if (newState.playing === true) {
                newState.playing = false;
            } else {
                newState.playing = true;
            }
            return newState;
        case SET_QUEUE:
            newState.queue = action.queue;
            return newState;
        case ADD_TO_QUEUE:
            newState.queue.push(action.song);
            return newState;
        default:
            return oldState;
    }
}

export default musicPlayerReducer;
