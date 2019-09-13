import React from 'react';
import { connect } from 'react-redux';

import {
    fetchOnePlaylist,
    deletePlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
} from '../actions/playlist_actions';

const msp = (state) => {
    return ({
        artists: state.entities.artists,
        // songs: Object.values(state.entities.songs),
        albums: state.entities.albums,
        playlists: state.entities.playlists,
        songs: Object.values(state.entities.songs),
        playlist_songs: Object.keys(state.entities.playlistSongs),
    })
}


const mdp = dispatch => ({
    fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    addSongToPlaylist: (data) => dispatch(addSongToPlaylist(data)),
    removeSongFromPlaylist: (id, data) => removeSongFromPlaylist(deletePlaylist(id, data)),
})

class PlaylistIndexDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchOnePlaylist(this.props.match.params.playlistId);
    }

    render() {
        let songList;
        
        const allAlbums = this.props.albums
        const allArtists = this.props.artists
        // playlist song, array of ids
        // then pull 
        //use songs as source of truth
        // map over songs with playlist songs ids

        let playlistSongs = this.props.playlist_songs;
        
        if (playlistSongs) {
            let playlistSongsIds = playlistSongs.map(song => song.song_id);
            

            // const artistAlbum = this.props.albums[song.album_id];
            // const artistName = this.props.artists[artistAlbum.artist_id].name;

            songList = this.props.songs.map(song => {
                let songAlbum = allAlbums[song.album_id]
                let albumArtist = allArtists[songAlbum.artist_id]
                
                return (
                    <div key={song.id} className="playlist-songs-index-item">

                        <img src={songAlbum.imageUrl}></img>
                        <div className="playlist-songs-index-item-details">
                            <div className="playlist-songs-index-item-details">
                                <div className="playlist-songs-index-item-details-songtitle">
                                    <span>{song.title}</span>
                                </div>
                                <div className="playlist-songs-index-item-details-artistinfo">
                                    <span>{albumArtist.name}</span>
                                </div>
                                <div className="playlist-songs-index-item-details-albumtitle">
                                    <span>{songAlbum.title}</span>
                                </div>
                                <div className="playlist-songs-index-albumyear">
                                    <span>{songAlbum.year}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        } else {
            songList = "No songs here...";
        }

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
        return (
            <div className="playlist-songs-container">
                <div className="playlist-songs-index">
                    {songList}
                </div>
                <p>Add a Song...</p>
            </div>
        )
    }
}

export default connect(msp, mdp)(PlaylistIndexDetail);