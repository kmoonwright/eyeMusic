import React from 'react';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Slideshow from './browse-slide';

class Browse extends React.Component {

    render() {
        
        return (
            <div className="browse-container">
                <div className="browse-content">
                    <h1>Browse</h1>
                    <div className="featured-artists">
                        <h3>Featured Artists</h3>
                        <div className="featured-artists-slideshow" id="slideshow">
                            <div className="slide-wrapper">
                                <Link to={'/library/artists/64'}>
                                    <div className="feature-bowie">
                                        <p>David Bowie</p>
                                    </div>
                                </Link>
                                <Link to={'/library/artists/70'}>
                                    <div className="feature-prince"></div>
                                </Link>
                                <Link to={'/library/artists/63'}>
                                    <div className="feature-daftpunk"></div>
                                </Link>
                            </div>
                        </div>
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