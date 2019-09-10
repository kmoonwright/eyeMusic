import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import { fetchAllAlbums, fetchOneAlbum, fetchAllSongs } from '../actions/music_actions'
import ArtistIndexDetail from './artist_index_detail'


class ArtistIndexItem extends React.Component {
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
        const artist = this.props.artist;
        return (
            <li className="artist-index-item">
                <Link to={`/library/artists/${artist.id}`}>
                    <img src={artist.photoUrl}></img>
                </Link>
                <Link to={`/library/artists/${artist.id}`}>
                    <div>{artist.name}</div>
                </Link>
            </li>
        )
        // THIS ONE WORKS
        // return (
        //     <div className="artist-index-detail">
        //         {this.props.artist.albums.map(album => {
        //             let albumSongs = this.props.songs.filter(song => song.album_id === album.id);
        //             albumSongs = albumSongs.map(song => (
        //                 <li key={song.id}>
        //                     {song.title}
        //                 </li>
        //             ))
        //             return (
        //                 <div key={album.id} className="artist-index-detail-item">
        //                     <img src={this.props.albums[album.id].imageUrl}></img>
        //                     <ul>
        //                         {albumSongs}
        //                     </ul>

        //                 </div>
        //             )
        //         })}
        //     </div>
        // )
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

export default connect(msp, mdp)(ArtistIndexItem);