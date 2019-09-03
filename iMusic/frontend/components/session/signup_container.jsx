import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions'
import Signup from './signup';

const mdp = dispatch => ({
    action: formUser => dispatch(createNewUser(formUser))
});

export default connect(undefined, mdp)(Signup)