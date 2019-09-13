import React from 'react';
import { connect } from 'react-redux';

import { fetchAllAlbums, fetchOneAlbum, fetchAllSongs } from '../actions/music_actions'
import { setCurrentSong, setQueue, toggleSong } from './../actions/music_player_actions';


class ArtistIndexDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            artists: this.props.artists,
            songs: this.props.songs,
            albums: this.props.albums,
            playlists: this.props.playlists,
        }
    }

    handlePlay(song) {
        this.props.setCurrentSong(song);
    }

    getQueue(currSongIdx) {
        let { songs } = this.props;
        let queue = songs.slice(currSongIdx).concat(songs.slice(0, currSongIdx))
        return queue;
    }
    render() {
        return (
            <ul className="artist-index-detail">
                {this.props.albums.map(album => {
                    let allsongs = this.props.songByAlbumId[album.id];
                    return (
                        <li key={album.id}>
                            <img src={album.imageUrl}></img>
                            <ul className="artist-index-details-show ">
                                <h3>{album.title}</h3>
                                <h4>{album.year}</h4>       
                                {allsongs.map(song => {
                                    return (
                                        <button key={song.id} 
                                            onClick={() => this.handlePlay(song)} 
                                            song={song}
                                            className="artist-index-detail-song-item"    
                                        >
                                            {song.title}
                                        </button>
                                    )
                                })}
                            </ul>                     
                        </li>
                    )
                })}
            </ul>
        )
    }
}

const msp = (state, ownProps) => {
    const artistId = ownProps.match.params.artistId;
    let artist = state.entities.artists[artistId];
    let albums = Object.values(state.entities.albums).filter(album => album.artist_id.toString() === artistId);
    let albumIds = albums.map(album => album.id);
    let songs = {};
    let songObjects = Object.values(state.entities.songs);
    songObjects.forEach(song => {
        if (albumIds.includes(song.album_id)) {
            songs[song.album_id] = songs[song.album_id] || [];
            songs[song.album_id].push(song);
        }
    });

    return ({
        artist: artist,
        albums: albums,
        songByAlbumId: songs,
    })
}

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOneSong: (songId) => dispatch(fetchOneSong(songId)),
    setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
})

export default connect(msp, mdp)(ArtistIndexDetail);