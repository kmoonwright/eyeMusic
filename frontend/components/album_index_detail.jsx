import React from 'react';
import { connect } from 'react-redux';

import { fetchAllAlbums, fetchOneAlbum, fetchAllSongs } from '../actions/music_actions'
import { setCurrentSong, setQueue, toggleSong } from './../actions/music_player_actions';

class AlbumIndexDetail extends React.Component {
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

    handlePlay(song) {
        this.props.setCurrentSong(song);
    }

    render() {
        let songList = this.props.songs;
        return (
            <div>
                <ul className="album--index-detail">
                    {songList.map(song => {
                        return (
                            <button key={song.id} onClick={() => this.handlePlay(song)} song={song}>
                                {song.title}
                            </button>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    const albumId = ownProps.match.params.albumId;
    let album = state.entities.albums[albumId];
    let songs = Object.values(state.entities.songs).filter(song => album.id === song.album_id);
    // let albumIds = albums.map(album => album.id);
    // let songs = {};
    // let songObjects = Object.values(state.entities.songs);
    // songObjects.forEach(song => {
    //     if (albumIds.includes(song.album_id)) {
    //         songs[song.album_id] = songs[song.album_id] || [];
    //         songs[song.album_id].push(song);
    //     }
    // });

    return ({
        album: album,
        songs: songs,
    })
}

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOneSong: (songId) => dispatch(fetchOneSong(songId)),
    setCurrentSong: (song) => (dispatch(setCurrentSong(song))),

})

export default connect(msp, mdp)(AlbumIndexDetail);