import React from 'react';
import { Switch } from 'react-router-dom';


class Browse extends React.Component {

    render() {
        debugger
        return (
            <div className="browse-container">
                <div className="browse-content">
                    <h1>Browse</h1>
                    <div className="featured-artists">
                        <h3>Featured Artists</h3>
                    </div>
                    <div className="featured-albums">
                        <h3>Featured Albums</h3>
                    </div>
                    <div className="featured-playlists">
                        <h3>Featured Playlists</h3>
                    </div>
                </div>
            </div>
        )
    }

}

export default Browse;