import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import { fetchAllAlbums, fetchAllArtists, fetchAllSongs } from '../actions/music_actions'
import AlbumIndex from './album_index';
import ArtistIndex from './artist_index';
import SongIndex from './song_index'


class Library extends React.Component {
    
    constructor(props){
        super(props)

        this.state = {
            albums: this.props.albums,
            artists: this.props.artists,
            songs: this.props.songs,
        }
    }

    componentDidMount() {
        this.props.fetchAllArtists();
        this.props.fetchAllAlbums();
        this.props.fetchAllSongs();
    }

    render() {
        return(
            <div className="library-container">
                {/* <LibraryNav></LibraryNav>
                <LibraryMain></LibraryMain> */}

                <div className="library-nav">
                    <p>Library</p>
                    <div className="library-nav-indices">
                        <Link to="/library/albums">Albums</Link>
                        <Link to="/library/artists">Artists</Link>
                        <Link to="/library/songs">Songs</Link>
                    </div>

                    <p>Music Playlists</p>
                    <div className="library-nav-playlists">
                        <p>Playlist1</p>
                        <p>Playlist2</p>
                        <p>Playlist3</p>
                    </div>
                </div>

                <div className="library-main">
                    <Switch>
                        <ProtectedRoute path="/library/albums" component={AlbumIndex}></ProtectedRoute>
                        <ProtectedRoute path="/library/artists" component={ArtistIndex}></ProtectedRoute>
                        <ProtectedRoute path="/library/songs" component={SongIndex}></ProtectedRoute>

                        {/* CATCH ALL FOR /LIBRARY URL? */}
                        <ProtectedRoute path="/library" component={AlbumIndex}></ProtectedRoute>
                    </Switch>
                </div>
            </div>
        )
    }
}

const msp = state => ({
    albums: Object.values(state.entities.albums),
    artists: Object.values(state.entities.artists),
    songs: Object.values(state.entities.songs),
})

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchAllAlbums: () => dispatch(fetchAllAlbums()),
    fetchAllArtists: () => dispatch(fetchAllArtists()),
    fetchOneSong: (songId) => dispatch(fetchOneSong(songId)),
})

export default connect(msp, mdp)(Library);