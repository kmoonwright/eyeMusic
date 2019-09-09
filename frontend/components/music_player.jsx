import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MusicPlayer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="player-container">
                <h3>MusicPlayer</h3>
                {/* <div className="playback-buttons">

                </div>
                <div className="player-volume">

                </div>
                <div className="playback-song-info">

                </div>
                <div className="player-search">

                </div> */}


            </div>
        )
    }
}

export default MusicPlayer;