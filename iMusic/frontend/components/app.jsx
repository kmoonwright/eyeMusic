import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignUpContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import LandingPage from './landing_page/landing_page';
import Main from './main';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/signup" component={SignUpContainer}></AuthRoute>
            <AuthRoute path="/login" component={LoginContainer}></AuthRoute>
            <ProtectedRoute path="/:section" component={Main}></ProtectedRoute>

            <Route exact path="/" component={LandingPage} />
        </Switch>
    </div>
);

export default App;