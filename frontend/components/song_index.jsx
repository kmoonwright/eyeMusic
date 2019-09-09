import React from 'react';
import { connect } from 'react-redux';

import { fetchAllSongs } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="song-index-container">
                <ul className="song-index">

                </ul>
                
            </div>
        )
    }
}

const msp = state => ({

})

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
})

export default connect(msp, mdp)(SongIndex);