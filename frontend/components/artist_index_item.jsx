import React from 'react';
import { connect } from 'react-redux';

import { fetchAllAlbums, fetchOneAlbum, fetchAllSongs } from '../actions/music_actions'


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
        return (
            <div className="artist-index-detail">
                {this.props.artist.albums.map(album => {
                    let albumSongs = this.props.songs.filter(song => song.album_id === album.id);
                    albumSongs = albumSongs.map(song => (
                        <li key={song.id}>
                            {song.title}
                        </li>
                    ))
                    return (
                        <div key={album.id} className="artist-index-detail-item">
                            <img src={this.props.albums[album.id].imageUrl}></img>
                            <ul>
                                {albumSongs}
                            </ul>

                        </div>
                    )
                })}
            </div>
        )
        // this.props.artist.albums.map(album => {
        //     return (
        //         <div className="artist-index-detail">
        //             <p>Hello</p>
        //         </div>
        //     )
        // })
        // return (
        //     <div className="artist-index-detail">
        //         {this.props.artist.albums.map(album => {
        //     debugger
        //             let albumMatch = this.props.albums[album.id]
        //             {/* return (
        //                 {albumMatch.imageUrl}
        //             ) */}
        //         })}
        //     </div>
        // )
        // <div className="artist-index-detail">
        //     {this.props.artist.albums.map(album => {
        //         let albumSongs = this.props.songs.filter(song => song.album_id === album.id);
        //         albumSongs = albumSongs.map(song => (
        //             <li>
        //                 {song.title}
        //             </li>
        //         ))
        //         return (

        //             <div key={album.id} className="artist-index-detail-item">
        //                 <img src={this.props.albums[album.id].imageUrl}></img>
        //                 <ul>
        //                     {albumSongs}
        //                 </ul>

        //             </div>
        //         )
        //     })}
        // </div>

        // if (this.props.songs.length > 0) {
        //     const songList = this.props.songs.map(song => {
        //         if (song.album_id === this.props.key) {
        //             return (
        //                 <li key={song.id} className="song-list-item">
        //                     <div song={song}>
        //                         Song Title: {song.title}
        //                     </div>
        //                 </li>
        //             )
        //         }
        //     })
        //     return (
        //         <div className="album-index-song-index-container">
        //             <ul className="album-index-song-index">
        //                 {songList}
        //             </ul>
        //         </div>
        //     )
        // } else {
        //     return null;
        // }
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