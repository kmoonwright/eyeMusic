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
                <div className="player-container-items">
                    <div className="music-player">
                        <p>MusicPlayer</p>
                    </div>
                    <div className="search-btn">
                        <button>
                            <Link to="/search">Search</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MusicPlayer;