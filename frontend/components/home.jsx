import React from 'react'
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import MusicPlayer from './music_player';
import NavBar from './nav_bar';
import Browse from './browse';
import Library from './library';
import Radio from './radio';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                {/* <div className="home-container"> */}
                <div className="header">
                    <ProtectedRoute path="/" component={MusicPlayer}></ProtectedRoute>
                    <ProtectedRoute path="/" component={NavBar}></ProtectedRoute>
                </div>
                <Switch>
                    <ProtectedRoute path="/library" component={Library}></ProtectedRoute>
                    <ProtectedRoute path="/browse" component={Browse}></ProtectedRoute>
                    <ProtectedRoute path="/radio" component={Radio}></ProtectedRoute>
                </Switch>

                {/* </div> */}
            </div>
        )
    }
}

const msp = state => ({
    currentUser: state.session.id
})

export default connect(msp)(Home);