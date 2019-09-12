import React from 'react'
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import MusicPlayer from './music_player';
import NavBar from './nav_bar';

class Header extends React.Component {
    render() {

        let { currentSong, queue, playing } = this.props;

        return (
            <div className="header-container">
                <MusicPlayer songs={queue} currentSong={currentSong} playing={playing}></MusicPlayer>
                <NavBar></NavBar>
            </div>
        )
    }
}

const msp = (state) => {
    return ({
        currentUser: state.session.id,
    
        queue: state.ui.musicPlayer.queue,
        currentSong: state.ui.musicPlayer.currentSong,
        playing: state.ui.musicPlayer.playing
    });
}

export default connect(msp)(Header);