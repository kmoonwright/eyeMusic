import React from 'react'
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import MusicPlayer from './music_player';
import Search from './search';
import NavBar from './nav_bar';
import Browse from './browse';
import Library from './library';
import Radio from './radio';

class Home extends React.Component {

    render() {
        debugger
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
                    <ProtectedRoute path="/search" component={Search}></ProtectedRoute>
                </Switch>

                {/* </div> */}
            </div>
        )
    }
}

const msp = state => ({
    currentUser: state.session.id,

    // songs: state.ui.musicPlayer.queue,
    // song: state.ui.musicPlayer.currentSong,
    // playing: state.ui.musicPlayer.playing
})

export default connect(msp)(Home);