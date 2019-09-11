import React from 'react';
import { connect } from 'react-redux';

import { fetchAllAlbums, fetchOneAlbum, fetchAllSongs } from '../actions/music_actions'


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

    render() {
        let songList = this.props.songs;
        return (
            <div>HELLO
                <ul className="album--index-detail">
                    {songList.map(song => {
                        return (
                            <li key={song.id}>
                                {song.title}
                            </li>
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
})

export default connect(msp, mdp)(AlbumIndexDetail);