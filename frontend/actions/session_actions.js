import { postUser, deleteSession, postSession, loginDemo } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const createNewUser = (user) => dispatch => {
    return postUser(user)
        .then(currentUser => dispatch({
            type: RECEIVE_CURRENT_USER,
            currentUser
        }),
        errors => dispatch({
            type: RECEIVE_SESSION_ERRORS,
            errors: errors.responseJSON
        })
    )
}

export const login = (formUser) => dispatch => {
    return postSession(formUser)
        .then(currentUser => dispatch({
            type: RECEIVE_CURRENT_USER,
            currentUser
        }),
        errors => dispatch({
            type: RECEIVE_SESSION_ERRORS,
            errors: errors.responseJSON
        })
    )
};

export const logout = () => dispatch => {
    return deleteSession()
        .then(() => dispatch({
            type: LOGOUT_CURRENT_USER
        }),
        errors => dispatch({
            type: RECEIVE_SESSION_ERRORS,
            errors: errors.responseJSON
        })
    )
};

export const demoLogin = () => dispatch => {
    return loginDemo()
        .then(currentUser => dispatch({ 
            type: RECEIVE_CURRENT_USER, 
            currentUser
        }),
        errors => dispatch({
            type: RECEIVE_SESSION_ERRORS,
            errors: errors.responseJSON
        })
    )          
};