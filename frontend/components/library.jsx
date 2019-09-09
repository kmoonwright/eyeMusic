import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import AlbumIndex from './album_index';
import ArtistIndex from './artist_index';
import SongIndex from './song_index'


class Library extends React.Component {
    
    constructor(props){
        super(props)
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
                    <h1>VVELCOME TO LibraryMain</h1>
                    <Switch>
                        <ProtectedRoute path="/library/albums" component={AlbumIndex}></ProtectedRoute>
                        <ProtectedRoute path="/library/artists" component={ArtistIndex}></ProtectedRoute>
                        <ProtectedRoute path="/library/songs" component={SongIndex}></ProtectedRoute>

                        {/* <ProtectedRoute path="/library/*" component={AlbumIndex}></ProtectedRoute> */}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Library;