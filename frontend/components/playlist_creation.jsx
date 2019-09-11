import React from 'react';
import { connect } from 'react-redux';
import { ProtectedRoute } from '../util/route_util';

import PlaylistIndexItem from './playlist_index_item'
import PlaylistIndexDetail from './playlist_index_detail'

class PlaylistCreation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            artists: this.props.artists,
            songs: this.props.songs,
            albums: this.props.albums,
            playlists: this.props.playlists,
        }
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    render() {
        return (
            <div className="playlist-creation">
                <p>Create a new playlist...</p>
                <label>Playlist Title:</label>
                <form>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="New awesome playlist..."
                    >
                    </input>
                </form>
            </div>
        )
    }

}

const msp = state => ({
    artists: Object.values(state.entities.artists),
    songs: Object.values(state.entities.songs),
    albums: Object.values(state.entities.albums),
    playlists: Object.values(state.entities.playlists),
})

const mdp = dispatch => ({
    fetchAllArtists: () => dispatch(fetchAllArtists()),
    fetchOneArtist: (artistId) => dispatch(fetchOneArtist(artistId)),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
})

export default (PlaylistCreation);