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
import { setCurrentSong, setQueue, toggleSong } from './../actions/music_player_actions';


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
    })
}


const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
    fetchAllPlaylistSongs: () => dispatch(fetchAllPlaylistSongs()),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    addSongToPlaylist: (data) => dispatch(addSongToPlaylist(data)),
    removeSongFromPlaylist: (id, data) => removeSongFromPlaylist(deletePlaylist(id, data)),

    setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
    toggleSong: () => (dispatch(toggleSong())),
    setQueue: (queue) => (dispatch(setQueue(queue))),
    togglePlay: (boolean) => dispatch(togglePlay(boolean)),
})

class PlaylistIndexDetail extends React.Component {
    constructor(props) {
        super(props)

        this.handlePlay = this.handlePlay.bind(this);
    }

    handlePlay(song) {
        this.props.setCurrentSong(song);
        this.props.toggleSong();
        this.props.setQueue(this.props.songs);
        // this will change state through a dispatch
        // every button changes state
        // music player should only change audio based on state change
    }

    handlePlaylistAdd(songId) {
        this.props.addSongToPlaylist({
            song_id: songId,
            playlist_id: null
        })
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
                            {/* <div className="song-index-item-details-playlist-button">
                                <span onClick={this.handlePlaylistAdd(song.id)}></span>
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
                    <div className="black-space"></div>
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
    //     let songList = "Test"

    //     let songList;
        
    //     const allAlbums = this.props.albums
    //     const allArtists = this.props.artists
    //     // playlist song, array of ids
    //     // then pull 
    //     //use songs as source of truth
    //     // map over songs with playlist songs ids

    //     let playlistSongs = this.props.playlist_songs;
    //     if (playlistSongs) {
    //         let playlistSongsIds = playlistSongs.map(song => song.song_id);
    //         let songs = this.props.songs
    //         // const artistAlbum = this.props.albums[song.album_id];
    //         // const artistName = this.props.artists[artistAlbum.artist_id].name;

    //         songList = this.props.songs.map(song => {
    //             let songAlbum = allAlbums[song.album_id]
    //             let albumArtist = allArtists[songAlbum.artist_id]
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