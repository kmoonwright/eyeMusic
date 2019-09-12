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
        
        let songList;
        let playlist = this.props.playlists[this.props.match.params.playlistId];
        debugger
        if (playlist.playlist_songs.length > 0) {
            playlist.playlist_songs.map(song => {
                const artistAlbum = this.props.albums[song.album_id];
                const artistName = this.props.artists[artistAlbum.artist_id].name;
                return (
                    <div key={song.id} className="playlist-songs">
                        <img src={artistAlbum.imageUrl}></img>
                        <div className="playlist-songs-index">
                            <div className="playlist-songs-index-songtitle">
                                <span>{song.title}</span>
                            </div>
                            <div className="playlist-songs-index-artistinfo">
                                <span>{artistName}</span>
                            </div>
                            <div className="playlist-songs-index-albumtitle">
                                <span>{artistAlbum.title}</span>
                            </div>
                            <div className="playlist-songs-index-albumyear">
                                <span>{artistAlbum.year}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        // if (this.props.songs.length > 0) {
        //     songList = this.props.songs.map(song => {
        //         const artistAlbum = this.props.albums[song.album_id];
        //         const artistName = this.props.artists[artistAlbum.artist_id].name;
        //         return (
        //             <div key={song.id} className="playlist-songs">
        //                 <img src={artistAlbum.imageUrl}></img>
        //                 <div className="playlist-songs-index">
        //                     <div className="playlist-songs-index-songtitle">
        //                         <span>{song.title}</span>
        //                     </div>
        //                     <div className="playlist-songs-index-artistinfo">
        //                         <span>{artistName}</span>
        //                     </div>
        //                     <div className="playlist-songs-index-albumtitle">
        //                         <span>{artistAlbum.title}</span>
        //                     </div>
        //                     <div className="playlist-songs-index-albumyear">
        //                         <span>{artistAlbum.year}</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //     })
        // }
        return (
            <div className="playlist-songs-container">
                {songList}
                <p>Add a Song</p>
            </div>
        )
    }
}

const msp = (state) => {
    return ({
        artists: state.entities.artists,
        songs: Object.values(state.entities.songs),
        albums: state.entities.albums,
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