import React from 'react';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import Login from './login';
import { withRouter } from 'react-router-dom';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const msp = state => ({
    errors: state.errors.session
});

const mdp = dispatch => {
    return {
        action: formUser => dispatch(login(formUser)),
        receiveErrors: (errors) => dispatch({
            type: RECEIVE_SESSION_ERRORS,
            errors
        })
    }
};

export default connect(msp, mdp)(Login);