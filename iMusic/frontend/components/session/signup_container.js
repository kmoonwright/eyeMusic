import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session'
import Signup from './signup';

const mdp = dispatch => ({
    createNewUser: user => dispatch(createNewUser(user))
})

export default connect(undefined, mdp)(Signup)