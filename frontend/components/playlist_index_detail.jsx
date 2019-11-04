import React from 'react';
import { connect } from 'react-redux';

import {
    fetchOnePlaylist,
    fetchAllPlaylistSongs,
    createPlaylist,
    deletePlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
} from '../actions/playlist_actions';
import { fetchAllSongs, fetchOneSong } from '../actions/music_actions'


const msp = (state) => {
    return ({
        // artists: state.entities.artists,
        // songs: Object.values(state.entities.songs),
        // albums: state.entities.albums,
        artists: state.entities.artists,
        albums: state.entities.albums,
        songs: Object.values(state.entities.songs),
        playlists: state.entities.playlists,
        playlist_songs: state.entities.playlist_songs,
        other: 'test'
    })
}


const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
    fetchAllPlaylistSongs: () => dispatch(fetchAllPlaylistSongs()),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    addSongToPlaylist: (data) => dispatch(addSongToPlaylist(data)),
    removeSongFromPlaylist: (id, data) => removeSongFromPlaylist(deletePlaylist(id, data)),
})

class PlaylistIndexDetail extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {}
    }

    render() {
        // ADD LOADING STATE
        if (this.props.songs.length < 1 || this.props.albums.length < 1 || this.props.artists.length < 1) {
            return <div className="loading-state">LOADING...</div>
        }

        if (this.props.songs.length > 0) {

            let playlistId = parseInt(this.props.match.params.playlistId);
            let playlist_songs = Object.values(this.props.playlist_songs);
            let songIds = [];
            let mix = []
            playlist_songs.forEach((songObj) => {
                if (songObj.playlist_id === playlistId) {
                    songIds.push(songObj.song_id);
                }
            })
            this.props.songs.map(song => {
                if (songIds.includes(song.id)) {
                    mix.push(song)
                }
            })
            
            const songList = mix.map(song => { 
                
                const artistAlbum = this.props.albums[song.album_id];
                const artistName = this.props.artists[artistAlbum.artist_id].name;
                return (
                    <div key={song.id} 
                        onClick={() => this.handlePlay(song)}
                        song={song}
                        // queue={this.getQueue()}
                        className="song-index-item"
                    >
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
            return (
                <div className="song-index-container">
                    <ul className="song-index">
                        {songList}
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default connect(msp, mdp)(PlaylistIndexDetail);

// V2
    // render() {
    //     debugger
    //     let songList = "Test"

    //     let songList;
        
    //     const allAlbums = this.props.albums
    //     const allArtists = this.props.artists
    //     // playlist song, array of ids
    //     // then pull 
    //     //use songs as source of truth
    //     // map over songs with playlist songs ids

    //     let playlistSongs = this.props.playlist_songs;
    //     debugger
    //     if (playlistSongs) {
    //         let playlistSongsIds = playlistSongs.map(song => song.song_id);
    //         let songs = this.props.songs
    //         // const artistAlbum = this.props.albums[song.album_id];
    //         // const artistName = this.props.artists[artistAlbum.artist_id].name;

    //         songList = this.props.songs.map(song => {
    //             let songAlbum = allAlbums[song.album_id]
    //             let albumArtist = allArtists[songAlbum.artist_id]
    //             debugger
    //             return (
    //                 <div key={song.id} className="playlist-songs-index-item">

    //                     <img src={songAlbum.imageUrl}></img>
    //                     <div className="playlist-songs-index-item-details">
    //                         <div className="playlist-songs-index-item-details">
    //                             <div className="playlist-songs-index-item-details-songtitle">
    //                                 <span>{song.title}</span>
    //                             </div>
    //                             <div className="playlist-songs-index-item-details-artistinfo">
    //                                 <span>{albumArtist.name}</span>
    //                             </div>
    //                             <div className="playlist-songs-index-item-details-albumtitle">
    //                                 <span>{songAlbum.title}</span>
    //                             </div>
    //                             <div className="playlist-songs-index-albumyear">
    //                                 <span>{songAlbum.year}</span>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             )
    //         })
    //     } else {
    //         songList = "No songs here...";
    //     }
    //     return (
    //         <div className="playlist-songs-container">
    //             <div className="playlist-songs-index">
    //                 {songList}
    //             </div>
    //             <p>Add a Song...</p>
    //         </div>
    //     )
    // }




// V1
// WILL FETCH THE CORRECT PLAYLIST SONGS, THEN WILL FETCH ALL SONGS AND OVERRIDE this.props.entities.songs

// let playlistItem = this.props.playlists[this.props.match.params.playlistId];
// if (playlistItem.playlist_songs.length > 0) {
//     playlistItem.playlist_songs.map(song => {
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