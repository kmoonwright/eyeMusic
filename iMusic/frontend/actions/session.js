import { postUser, deleteSession, postSession } from '../util/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const createNewUser = (user) => dispatch => {
    return postUser(user)
        .then(user => dispatch({
            type: RECEIVE_CURRENT_USER,
            user
        }))
}

export const login = () => dispatch => {
    return postSession()
        .then(user => dispatch({
            type: RECEIVE_CURRENT_USER,
            user
        }))
}

export const logout = () => dispatch => {
    return deleteSession()
        .then(() => dispatch({
            type: LOGOUT_CURRENT_USER
        }))
}
