import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import { fetchAllAlbums, fetchOneAlbum, fetchAllSongs } from '../actions/music_actions'
import PlaylistIndexDetail from './playlist_index_detail'


class PlaylistIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            artists: this.props.artists,
            songs: this.props.songs,
            albums: this.props.albums,
        }
    }

    componentDidMount() {
    }

    render() {
        const playlist = this.props.playlist;
        return (
            <li className="playlist-nav-index-item">
                <Link to={`/library/playlists/${playlist.id}`}>
                    <div>{playlist.title}</div>
                </Link>
            </li>
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
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOneSong: (songId) => dispatch(fetchOneSong(songId)),
})

export default connect(msp, mdp)(PlaylistIndexItem);