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
        playlist_songs: state.entities.playlist_songs,
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

        debugger
        // let playlistSongs = this.props.playlists.playlist_songs;
        // let playlistSongsIds = playlistSongs.map(song => song.song_id);

        if (this.props.playlists.playlist_songs) {
            let playlistItems = Object.values(this.props.playlists.playlist_songs);
            debugger

            // const artistAlbum = this.props.albums[song.album_id];
            // const artistName = this.props.artists[artistAlbum.artist_id].name;

            songList = playlistItems.map(song => {
                let songAlbum = allAlbums[song.album_id]
                debugger
                let albumArtist = allArtists[songAlbum.artist_id]
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
        } else {
            songList = "No songs here...";
        }

        // WILL FETCH THE CORRECT PLAYLIST SONGS, THEN WILL FETCH ALL SONGS AND OVERRIDE this.props.entities.songs

        // let playlist = this.props.playlists[this.props.match.params.playlistId];
        
        // let playlist = this.props.playlists[this.props.match.params.playlistId];
        // if (playlist.playlist_songs.length > 0) {
        //     playlist.playlist_songs.map(song => {
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
                {songList}
                <p>Add a Song</p>
            </div>
        )
    }
}

export default connect(msp, mdp)(PlaylistIndexDetail);