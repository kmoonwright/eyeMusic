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

    componentDidMount() {
        const playlistId = state.entities.playlists[ownProps.match.params.playlistId]
        this.props.fetchOnePlaylist(playlistId);
        debugger
    }

    render() {
        
        // let playlist = this.props.fetchOnePlaylist(this.props.match.params.playlistId)
        // let songs = this.props.songs
        // let songList = [];
        // const albums = this.props.albums;
        // const artists= this.props.artists;
        debugger
        if (songs.length > 0) {
            songList = songs.map(song => {
                // const artistAlbum = albums[song.album_id];
                // const artistName = artists[artistAlbum.artist_id].name;
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

const msp = (state, ownProps) => {
    return ({
        artists: Object.values(state.entities.artists),
        songs: Object.values(state.entities.songs),
        albums: Object.values(state.entities.albums),
        playlists: Object.values(state.entities.playlists),
    })
}


const mdp = dispatch => ({
    fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    addSongToPlaylist: (data) => dispatch(addSongToPlaylist(data)),
    removeSongFromPlaylist: (id, data) => removeSongFromPlaylist(deletePlaylist(id, data)),
})

export default connect(msp, mdp)(PlaylistIndexDetail);