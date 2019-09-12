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
    }

    componentDidMount() {
        this.props.fetchOnePlaylist(this.props.match.params.playlistId);
    }

    render() {
        
        // let playlist = this.props.fetchOnePlaylist(this.props.match.params.playlistId)
        // let songs = this.props.songs
        // let songList = [];
        // const albums = this.props.albums;
        // const artists = this.props.artists;
        let songList;
        if (this.props.songs.length > 0) {
            songList = this.props.songs.map(song => {
                const artistAlbum = this.props.albums[song.album_id];
                const artistName = this.props.artists[artistAlbum.artist_id].name;
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
        artists: state.entities.artists,
        songs: Object.values(state.entities.songs),
        albums: state.entities.albums,
        playlists: Object.values(state.entities.playlists),
    })
    debugger
}


const mdp = dispatch => ({
    fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    addSongToPlaylist: (data) => dispatch(addSongToPlaylist(data)),
    removeSongFromPlaylist: (id, data) => removeSongFromPlaylist(deletePlaylist(id, data)),
})

export default connect(msp, mdp)(PlaylistIndexDetail);