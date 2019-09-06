import React from 'react';
import { connect } from 'react-redux';
import { createNewUser, demoLogin } from '../../actions/session_actions'
import Signup from './signup';

const mdp = dispatch => ({
    action: formUser => dispatch(createNewUser(formUser)),
    demoLogin: () => dispatch(demoLogin())
});

export default connect(undefined, mdp)(Signup)