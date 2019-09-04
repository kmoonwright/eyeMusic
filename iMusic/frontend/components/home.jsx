import React from 'react'
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import NavBarContainer from './nav_bar/nav_bar_container';
import Browse from './browse';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <ProtectedRoute path="/" component={NavBarContainer}></ProtectedRoute>
                <Switch>
                    <ProtectedRoute path="/browse" component={Browse}></ProtectedRoute>
                </Switch>
            </div>
        )
    }
}

const msp = state => ({
    currentUser: state.session.id
})

export default connect(msp)(Home);