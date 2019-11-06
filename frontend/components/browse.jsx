import React from 'react';
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { fetchAllAlbums, fetchAllArtists, fetchAllPlaylists } from '../actions/music_actions'


const msp = (state, ownProps) => {
    return ({
        artists: Object.values(state.entities.artists),
        songs: Object.values(state.entities.songs),
        albums: Object.values(state.entities.albums),
        playlists: Object.values(state.entities.playlists),
    })
}

const mdp = dispatch => ({
    fetchAllAlbums: () => dispatch(fetchAllAlbums()),
    fetchAllArtists: () => dispatch(fetchAllArtists()),
    fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
})


class Browse extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            albums: this.props.albums,
            artists: this.props.artists,
            songs: this.props.songs,
            playlists: this.props.playlists,
            playlist_songs: this.props.playlist_songs
        }
    }

    componentDidMount() {
        this.props.fetchAllArtists();
        this.props.fetchAllAlbums();
        this.props.fetchAllPlaylists();
    }

    render() {
        let boldId, sixTwentyId, livingId, bowieId, princeId, daftId, sixtiesId, seventiesId, eightiesId;
        this.props.albums.forEach(album => {
            if (album.title === "Axis: Bold As Love")
                boldId = album.id;
            if (album.title === "6Twenty")
                sixTwentyId = album.id;
            if (album.title === "Living In A Box")
                livingId = album.id;
        })
        this.props.artists.forEach(artist => {
            if (artist.name === "David Bowie")
                bowieId = artist.id;
            if (artist.name === "Prince")
                princeId = artist.id;
            if (artist.name === "Daft Punk")
                daftId = artist.id;
        })
        this.props.playlists.forEach(playlist => {
            if (playlist.title === "60's Playlist")
                sixtiesId = playlist.id;
            if (playlist.title === "70's Playlist")
                seventiesId = playlist.id;
            if (playlist.title === "80's Playlist")
                eightiesId = playlist.id;
        })
        
        return (
            <div className="browse-container">
                <div className="browse-content">
                    <div className="featured-artists">
                        <h3>Featured Artists</h3>
                        <div className="featured-artists-slideshow" id="slideshow">
                            <div className="slide-wrapper">
                                <Link to={`/library/artists/${bowieId}`}>
                                    <div className="feature-bowie">
                                        <p>David Bowie</p>
                                    </div>
                                </Link>
                                <Link to={`/library/artists/${princeId}`}>
                                    <div className="feature-prince"></div>
                                </Link>
                                <Link to={`/library/artists/${daftId}`}>
                                    <div className="feature-daftpunk"></div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="featured-albums">
                        <h3>Featured Albums</h3>
                        <div className="featured-album-index">
                            <Link to={`/library/albums/${boldId}`}>
                                <div className="featured-album-bold"></div>
                                <p>Axis:Bold As Love</p>
                                <p>Jimi Hendrix Experience</p>
                            </Link>
                            <Link to={`/library/albums/${sixTwentyId}`}>
                                <div className="featured-album-d4"></div>
                                <p>6Twenty</p>
                                <p>The D4</p>
                            </Link>
                            <Link to={`/library/albums/${livingId}`}>
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
                                <Link to={`/library/albums/${sixtiesId}`}>
                                    <p>60's Hits</p>
                                </Link>
                            </div>
                            <div className="featured-playlist-70s">
                                <Link to={`/library/albums/${seventiesId}`}>
                                    <p>70's Hits</p>
                                </Link>
                            </div>
                            <div className="featured-playlist-80s">
                                <Link to={`/library/albums/${eightiesId}`}>
                                    <p>80's Hits</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default connect(msp, mdp)(Browse);