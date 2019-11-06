import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import { fetchAllAlbums, fetchAllArtists, fetchAllSongs } from '../actions/music_actions'
import { fetchAllPlaylists, fetchAllPlaylistSongs } from '../actions/playlist_actions'
import AlbumIndex from './album_index';
import ArtistIndex from './artist_index';
import SongIndex from './song_index'
import PlaylistCreation from './playlist_creation'
import PlaylistIndexItem from './playlist_index_item'
import PlaylistIndexDetail from './playlist_index_detail'


const msp = state => ({
    albums: Object.values(state.entities.albums),
    artists: Object.values(state.entities.artists),
    songs: Object.values(state.entities.songs),
    playlists: Object.values(state.entities.playlists),
})

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchAllAlbums: () => dispatch(fetchAllAlbums()),
    fetchAllArtists: () => dispatch(fetchAllArtists()),
    fetchOneSong: (songId) => dispatch(fetchOneSong(songId)),
    fetchAllPlaylists: () => dispatch(fetchAllPlaylists()),
    fetchAllPlaylistSongs: () => dispatch(fetchAllPlaylistSongs()),
})


class Library extends React.Component {

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
        this.props.fetchAllSongs();
        this.props.fetchAllPlaylists();
        this.props.fetchAllPlaylistSongs();
    }

    render() {
        
        return (
            <div className="library-container">

                <div className="library-nav">
                    <div className="library-nav-items">
                        <p>Library</p>
                        <div className="library-nav-items-btns">
                            <Link to="/library/albums">
                                <div className="library-nav-items-btns-each">
                                    Albums
                                </div>
                            </Link>
                            <Link to="/library/artists">
                                <div className="library-nav-items-btns-each">
                                    Artists
                                </div>
                            </Link>
                            <Link to="/library/songs">
                                <div className="library-nav-items-btns-each">
                                    Songs
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="library-nav-playlists">
                        <p>Music Playlists</p>
                        <ul className="library-nav-playlist-items">
                            {this.props.playlists.map(playlist => {
                                return (
                                    <PlaylistIndexItem key={playlist.id} playlist={playlist}></PlaylistIndexItem>
                                )
                            })}
                        </ul>
                        <div className="library-nav-playlist-create">
                            <Link to="/library/playlist/new">
                                Create playlist...
                            </Link>
                        </div>
                    </div>

                    <div className="library-nav-socials">
                            {/* <p>
                                Developed by
                                <a href="http://www.kylemoonwright.com" target="_blank" className="landing-social-portfolio-link"> Kyle Moon-Wright</a>
                            </p> */}
                            <div className="library-nav-social-icons">
                                <a href="https://www.linkedin.com/in/kyle-moon-wright/" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/kmoonwright" target="_blank">
                                    <i className="fab fa-github-square"></i>
                                </a>
                                <a href="https://angel.co/kmoonwright" target="_blank">
                                    <i className="fab fa-angellist"></i>
                                </a>
                            </div>
                    </div>

                </div>

                <div className="library-main">
                    <Switch>
                        <ProtectedRoute path="/library/albums" component={AlbumIndex}></ProtectedRoute>
                        <ProtectedRoute path="/library/artists" component={ArtistIndex}></ProtectedRoute>
                        <ProtectedRoute path="/library/songs" component={SongIndex}></ProtectedRoute>
                        <ProtectedRoute path="/library/playlists/:playlistId" component={PlaylistIndexDetail}></ProtectedRoute>
                        <ProtectedRoute path="/library/playlist" component={PlaylistCreation}></ProtectedRoute>
                        {/* <ProtectedRoute path="/library/playlists" component={PlaylistIndex}></ProtectedRoute> */}

                        {/* CATCH ALL FOR /LIBRARY URL? */}
                        <ProtectedRoute path="/library" component={AlbumIndex}></ProtectedRoute>
                    </Switch>
                </div>

            </div>
        )
    }
}

export default connect(msp, mdp)(Library);