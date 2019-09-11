import React from 'react';
import { connect } from 'react-redux';

import {
    fetchOnePlaylist,
    deletePlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
} from '../actions/playlist_actions';

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
        
        let playlistId = this.props.fetchOnePlaylist(this.props.match.params.playlistId)
        let songs = this.props.songs
        let songList = [];
        const artistAlbum = this.props.albums[song.album_id];
        const artistName = this.props.artists[artistAlbum.artist_id].name;
        if (songs.length > 0) {
            songList = songs.map(song => {
                return (
                    <div key={song.id} className="song-index-item">
                        <img src={artistAlbum.imageUrl}></img>
                        <div className="song-index-item-details">
                            <div className="song-index-item-details-songtitle">
                                <span>{song.title}</span>
                            </div>
                            <div className="song-index-item-details-artistinfo">
                                <span>{artistName}</span>
                            </div>
                            <div className="song-index-item-details-albumtitle">
                                <span>{artistAlbum.title}</span>
                            </div>
                            <div className="song-index-item-details-albumyear">
                                <span>{artistAlbum.year}</span>
                            </div>
                            {/* <div className="song-index-item-add-to-playlist">
                                <button>Add</button>
                            </div> */}

                        </div>
                    </div>
                )
            })
        }
        return (
            <div className="playlist-songs">
                {songList}
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
    fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    addSongToPlaylist: (data) => dispatch(addSongToPlaylist(data)),
    removeSongFromPlaylist: (id, data) => removeSongFromPlaylist(deletePlaylist(id, data)),
})

export default connect(msp, mdp)(PlaylistIndexDetail);