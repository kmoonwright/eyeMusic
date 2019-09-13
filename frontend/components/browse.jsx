import React from 'react';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Browse extends React.Component {

    render() {
        
        return (
            <div className="browse-container">
                <div className="browse-content">
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
                        <div className="featured-album-index">
                            <Link to={'/library/albums/158'}>
                                <div className="featured-album-bold"></div>
                                <p>Axis:Bold As Love</p>
                                <p>Jimi Hendrix Experience</p>
                            </Link>
                            <Link to={'/library/albums/149'}>
                                <div className="featured-album-d4"></div>
                                <p>6Twenty</p>
                                <p>The D4</p>
                            </Link>
                            <Link to={'/library/albums/164'}>
                                <div className="featured-album-box"></div>
                                <p>Living In A Box</p>
                                <p>Living In A Box</p>
                            </Link>
                        </div>

                    </div>

                    <div className="featured-playlist">
                        <h3>Featured Playlists</h3>
                        <div className="featured-playlist-index">
                            <div className="featured-playlist-60s">
                                <p>60's Hits</p>
                            </div>

                            <div className="featured-playlist-70s">
                                <p>70's Hits</p>
                            </div>

                            <div className="featured-playlist-80s">
                                <p>80's Hits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Browse;