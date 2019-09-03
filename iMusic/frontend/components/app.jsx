import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import LandingPage from './landing_page/landing_page';

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route exact path="/" component={LandingPage} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignUpContainer} />
    </div>
);

export default App;