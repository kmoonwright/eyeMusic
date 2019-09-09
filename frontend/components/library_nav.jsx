import React from 'react';
import { Link } from 'react-router-dom';

import SongIndex from './song_index'

class LibraryNav extends React.Component {
    
    render() {
        return(
            <div className="library-nav">
                <div className="library-nav-items">
                    <ol>
                        <Link to="./album_index">Albums</Link>
                        <Link to="./artist_index">Artists</Link>
                        <Link to="./song_index">Songs</Link>
                    </ol>
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
        )
    }
}

export default LibraryNav;