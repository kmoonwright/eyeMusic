import React from 'react';
import { connect } from 'react-redux';
import { ProtectedRoute } from '../util/route_util';
import { Link, Route } from 'react-router-dom';

import { fetchAllAlbums, fetchOneAlbum, fetchAllSongs } from '../actions/music_actions'
import AlbumIndexItem from './album_index_item'
import AlbumIndexDetail from './album_index_detail'


const msp = (state, ownProps) => {
    const albumId = ownProps.match.params.albumId;
    let album = state.entities.albums[albumId];

    return ({
        artists: Object.values(state.entities.artists),
        songs: Object.values(state.entities.songs),
        albums: Object.values(state.entities.albums),

    })
}

const mdp = dispatch => ({
    fetchAllAlbums: () => dispatch(fetchAllAlbums()),
    fetchOneAlbum: (albumId) => dispatch(fetchOneAlbum(albumId)),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
})


class AlbumIndex extends React.Component {
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
        // ADD LOADING STATE
        if (this.props.songs.length < 1 || this.props.albums.length < 1 || this.props.artists.length < 1) {
            return <div className="loading-state">LOADING...</div>
        }
        return (
            <div className="album-index-container">
                <ul className="album-index">
                    {this.props.albums.map(album => {
                        return (
                            <AlbumIndexItem key={album.id} album={album}></AlbumIndexItem>
                        )
                    })}
                </ul>

                <ProtectedRoute path="/library/albums/:albumId" component={AlbumIndexDetail}></ProtectedRoute>
            </div>
        )
    
    //     if (this.props.albums.length > 0) {
            
    //         const albumList = this.props.albums.map(album => {
    //             return (
    //                 <li key={album.id} className="album-list-item">
    //                     <div album={album}>
    //                         {/* Title: {album.title}, 
    //                         Year: {album.year}, */}
    //                         <img src={album.imageUrl}></img>
    //                         <AlbumIndexItem
    //                             key={album.id}
    //                             album={album}
    //                             >
    //                         </AlbumIndexItem>
    //                     </div>
    //                 </li>
    //             )
    //         })
    //         return (
    //             <div className="album-index-container">
    //                 <ul className="album-index">
    //                     {albumList}
    //                 </ul>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }

    }
}

export default connect(msp, mdp)(AlbumIndex);