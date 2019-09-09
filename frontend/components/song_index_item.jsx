import React from 'react';
import { connect } from 'react-redux';
import { fetchAllSongs, fetchOneSong } from '../actions/music_actions'

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songs: this.props.songs
        }
    }

    render() {

        return (
            <div className="song-index-item">
                return (
                    <li key={song.id} className="song-item">{song}</li>
                    )
            </div>
        )
    }
}

const msp = state => ({

})

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOneSong: (id) => dispatch(fetchOneSong(id)),

})

export default connect(msp, mdp)(SongIndexItem);