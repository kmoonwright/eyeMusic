import { postUser, deleteSession, postSession, loginDemo } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const createNewUser = (user) => dispatch => {
    return postUser(user)
        .then(currentUser => dispatch({
            type: RECEIVE_CURRENT_USER,
            currentUser
        }))
}

export const login = (formUser) => dispatch => {
    return postSession(formUser)
        .then(currentUser => dispatch({
            type: RECEIVE_CURRENT_USER,
            currentUser
        }))
};

export const logout = () => dispatch => {
    return deleteSession()
        .then(() => dispatch({
            type: LOGOUT_CURRENT_USER
        }))
};

export const demoLogin = () => dispatch => {
    return loginDemo()
        .then(currentUser => dispatch({ type: RECEIVE_CURRENT_USER, currentUser})
            // errors => dispatch({type: RECEIVE_SESSION_ERRORS, errors.responseJSON})
    )
}