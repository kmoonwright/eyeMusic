import React from 'react';
import { connect } from 'react-redux';

import { fetchAllAlbums, fetchOneAlbum, fetchAllSongs } from '../actions/music_actions'

class AlbumIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            songs: this.props.songs,
        }
    }

    componentDidMount() {
    }

    render() {
        if (this.props.songs.length > 0) {
            const songList = this.props.songs.map(song => {
                if (song.album_id === this.props.album.id) {
                    return (
                        <li key={song.id} className="song-list-item">
                            <div song={song}>
                                {song.title}
                            </div>
                        </li>
                    )
                }
            })
            return (
                <div className="album-index-song-index-container">
                    <ul className="album-index-song-index">
                        {songList}
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}

const msp = state => ({
    artists: Object.values(state.entities.artists),
    songs: Object.values(state.entities.songs),
    albums: state.entities.albums,
})

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOneSong: (songId) => dispatch(fetchOneSong(songId)),
})

export default connect(msp, mdp)(AlbumIndexItem);