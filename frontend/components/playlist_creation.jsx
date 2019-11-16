import React from 'react';
import { connect } from 'react-redux';
import { ProtectedRoute } from '../util/route_util';
import { createPlaylist } from '../actions/playlist_actions';

import PlaylistIndexItem from './playlist_index_item'
import PlaylistIndexDetail from './playlist_index_detail'


const msp = state => ({
    last_playlist: Object.values(state.entities.playlists).slice(-1)[0]
})

const mdp = dispatch => ({
    fetchAllArtists: () => dispatch(fetchAllArtists()),
    fetchOneArtist: (artistId) => dispatch(fetchOneArtist(artistId)),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    createPlaylist: (playlist) => dispatch(createPlaylist(playlist)),
})


class PlaylistCreation extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.redirectToShow = this.redirectToShow.bind(this);
        this.state = { title: '', user_id: this.current_user };
    }

    redirectToShow() {
        this.props.history.push(`/library/playlists/${this.props.last_playlist.id}`);
    }

    handleSubmit(e) {
        e.preventDefault();
        let playlist = this.state;
        this.setState({ title: '' });
        this.props.createPlaylist(playlist)
            .then(() => this.redirectToShow());
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    render() {
        return (
            <div className="playlist-creation">
                <p>Create a new playlist...</p>
                <label>Playlist Title:</label>
                <form className="playlist-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="New awesome playlist..."
                    >
                    </input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default connect(msp, mdp)(PlaylistCreation);