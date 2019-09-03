import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';
import { withRouter } from 'react-router-dom';

const mdp = dispatch => ({
    login: formUser => dispatch(login(formUser))
});

export default connect(undefined, mdp)(Login);