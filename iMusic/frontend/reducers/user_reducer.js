import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // const newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return Object.assign({}, oldState, { [action.user.id]: action.user });
        default:
            return oldState;
    }
};

export default usersReducer;