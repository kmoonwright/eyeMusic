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
                    <div className="library-nav-items">
                        <Link to="./album_index">Albums</Link>
                        <Link to="./artist_index">Artists</Link>
                        <Link to="./song_index">Songs</Link>

                        <ul>Library
                            <li>Albums</li>
                            <li>Artists</li>
                            <SongIndex>SongIndex</SongIndex>
                        </ul>
                        <ul>Playlists
                            <li>Playlist1</li>
                            <li>Playlist2</li>
                            <li>Playlist3</li>
                        </ul>
                    </div>
                </div>

                <div className="library-main">
                    <h1>VVELCOME TO LibraryMain</h1>
                    <Switch>
                        <ProtectedRoute path="/album_index" component={AlbumIndex}></ProtectedRoute>
                        <ProtectedRoute path="/artist_index" component={ArtistIndex}></ProtectedRoute>
                        <ProtectedRoute path="/song_index" component={SongIndex}></ProtectedRoute>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Library;