import React from 'react';
import { connect } from 'react-redux';
import { fetchAllArtists, fetchOneArtist } from '../actions/music_actions'

class ArtistIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            artists: this.props.artists
        }
    }
    render() {
        return (
            <div>
                <p>ARTIST INDEX</p>

            </div>
        )
    }
}

const msp = state => ({
    artists: Object.values(state.entities.artists)
})

const mdp = dispatch => ({
    fetchAllArtists: () => dispatch(fetchAllArtists()),
    fetchOneArtist: (songId) => dispatch(fetchOneArtist(songId)),
})

export default connect(msp, mdp)(ArtistIndex);