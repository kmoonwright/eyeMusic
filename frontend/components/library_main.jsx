import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import AlbumIndex from './album_index';
import ArtistIndex from './artist_index';
import SongIndex from './song_index';

class LibraryMain extends React.Component {

    render() {
        return(
            <div className="library-main">
                <h1>VVELCOME TO LibraryMain</h1>
                <Switch>
                    <ProtectedRoute path="/album_index" component={AlbumIndex}></ProtectedRoute>
                    <ProtectedRoute path="/artist_index" component={ArtistIndex}></ProtectedRoute>
                    <ProtectedRoute path="/song_index" component={SongIndex}></ProtectedRoute>
                </Switch>
            </div>
        )
    }
}

export default LibraryMain;