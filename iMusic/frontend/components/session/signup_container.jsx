import React from 'react';
import { connect } from 'react-redux';
import { createNewUser, demoLogin } from '../../actions/session_actions'
import Signup from './signup';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const msp = state => ({
    errors: state.errors.session
});

const mdp = dispatch => ({
    action: formUser => dispatch(createNewUser(formUser)),
    demoLogin: () => dispatch(demoLogin()),
    receiveErrors: (errors) => dispatch({ 
        type: RECEIVE_SESSION_ERRORS,
        errors
    })
});

export default connect(msp, mdp)(Signup)