import React from 'react';
import { connect } from 'react-redux';

class PlaylistIndexDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            artists: this.props.artists,
            songs: this.props.songs,
            albums: this.props.albums,
            playlists: this.props.playlists,
        }
    }

    render() {
        return (
            <div>
            <p> HELLO</p>
            <p> HELLO</p>
            <p> HELLO</p>
            <p> HELLO</p>
            <p> HELLO</p>
            <p> HELLO</p>
            <p> HELLO</p>
            <p> HELLO</p>
            <p> HELLO</p>

            </div>
        )
    }
}

const msp = (state, ownProps) => ({
    artists: Object.values(state.entities.artists),
    songs: Object.values(state.entities.songs),
    albums: Object.values(state.entities.albums),
    playlists: Object.values(state.entities.playlists),
})

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOneSong: (songId) => dispatch(fetchOneSong(songId)),
})

export default connect(msp, mdp)(PlaylistIndexDetail);