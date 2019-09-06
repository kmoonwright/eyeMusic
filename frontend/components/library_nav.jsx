import React from 'react';

class LibraryNav extends React.Component {
    
    render() {
        return(
            <div className="library-nav">
                <div className="library-nav-items">
                    <ul>Library
                        <li>Albums</li>
                        <li>Artists</li>
                        <li>Songs</li>
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