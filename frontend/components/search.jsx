import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { searchArtists, clearSearch } from '../actions/search_actions'

class Search extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = { searchVal: '' };
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.clearSearch();
    }

    handleSearch(e) {
        if (this.state.searchVal === "") {
            this.props.history.push("/search");
        }
        this.setState({ searchVal: e.target.value });
        if (e.target.value === "") {
            this.props.clearSearch();
        }
        this.props.searchArtists(e.target.value);
    }

    render() {
        let artistList;
        let albumList;
        let songsList;
        let playlistList;
        const artists = this.props.artists;
        const albums = this.props.albums;
        const songs = this.props.songs;
        const playlists = this.props.playlists;
        let artistsHeader = artists.length > 0 ? "Artists" : "";
        let albumsHeader = albums.length > 0 ? "Albums" : "";
        let songsHeader = songs.length > 0 ? "Songs" : "";
        let playlistsHeader = playlists.length > 0 ? "Playlists" : "";
        let searchRender;

        if (artists.length > 0) {
            artistList = artists.map((artist, index) => {
                return (
                    <li className="search-item-artist" key={`${index}`}>
                        {artist.name}
                    </li>
                )
            })
        }
        if (songs.length > 0) {
            songsList = artists.map((song, index) => {
                const artistAlbum = this.props.albums[song.album_id];
                const artistName = this.props.artists[artistAlbum.artist_id].name;
                return (
                    <li className="search-item-song" key={`${index}`}>
                        <div className="search-item-song-title">
                            <span>{song.title}</span>
                        </div>
                        <div className="search-item-song-artist-name">
                            <span>{artistName}</span>
                        </div>
                        <div className="search-item-song-album-title">
                            <span>{artistAlbum.title}</span>
                        </div>
                        <div className="search-item-song-album-year">
                            <span>{artistAlbum.year}</span>
                        </div>
                    </li>
                )
            })
        }
        if (albums.length > 0) {
            albumList = albums.map((album, index) => {
                return (
                    <li className="search-item-album" key={`${index}`} >
                        <Link to={`/albums/${album.id}`}>
                            <img src={album.photo} />
                        </Link>

                        <div className="search-item-album-title">
                            <Link to={`/albums/${album.id}`}>{album.title}</Link>
                        </div>
                    </li>
                )
            })
        }
        if (playlists.length > 0) {
            playlistList = playlists.map((playlist, index) => {
                return (
                    <li className="search-item-playlist" key={index}>
                        <Link to={`/playlists/${playlist.id}`}>
                            <img className="search-item-playlist-images" src={playlist.photo} />
                        </Link>

                        <Link
                            to={`/playlists/${playlist.id}`}>
                            <p className="search-item-playlist-title">{playlist.title}</p>
                        </Link>
                    </li>
                )
            })
        }
        if (artists[0] === undefined && this.state.searchVal === "" ||
            songs[0] === undefined && this.state.searchVal === "" ||
            albums[0] === undefined && this.state.searchVal === "" ||
            playlists[0] === undefined && this.state.searchVal === "") {
            searchRender = <div className="search-before">
                <h1 className="search-loading-title">Search eyeMusic</h1>
                <p className="search-loading-phrase">Find your favorite playlists, artists, and albums.</p>
            </div>;
        } else if (artists[0] === undefined && this.state.searchVal !== "" &&
            albums[0] === undefined && this.state.searchVal !== "" &&
            songs[0] === undefined && this.state.searchVal !== "" &&
            playlists[0] === undefined && this.state.searchVal !== ""
        ) {
            searchRender =
                <div className="search-before">
                    <h1>{`No results found for "${this.state.searchVal}"`}</h1>
                    <p>Please make sure your words are spelled correctly or use less or different keywords.</p>
                </div>
            } else {
            searchRender =
                <div className="search-results">
                    <h1 className="artists-header">
                        {artistsHeader}
                    </h1>
                    <div className="search-all-artists">
                        {artistList}
                    </div>

                    <h1 className="albums-header">
                        {albumsHeader}
                    </h1>
                    <div className="search-all-albums">
                        {albumList}
                    </div>

                    <h1 className="songs-header">
                        {songsHeader}
                    </h1>
                    <div className="search-all-songs">
                        {songsList}
                    </div>

                    <h1 className="playlists-header">
                        {playlistsHeader}
                    </h1>
                    <div className="search-all-playlists">
                        {playlistList}
                    </div>
                </div>
            }
        
        return (
            <div className="search-container">
                <div className="search-index">
                    <p>Search for tunes...</p>
                    <form className="search-form" onSubmit={this.handleSubmit}>
                        <input className="search-bar-text"
                            type="text"
                            placeholder="Start typing..."
                            value={this.state.searchVal}
                            onChange={this.handleSearch}
                        ></input>
                        <button type="submit">Submit</button>
                    </form>
                    {searchRender}
                </div>
            </div>
        )
    }
}

const msp = state => {
    let artists = [];
    let songs = [];
    let albums = [];
    let playlists = [];
    
    if (state.ui.search.artist_ids) {
        artists = state.ui.search.artist_ids.map((artist_id) => {
            return (state.entities.artists[artist_id]);
        });
    }
    if (state.ui.search.song_ids) {
        songs = state.ui.search.song_ids.map((song_id) => {
            return (state.entities.songs[song_id]);
        });
    }
    if (state.ui.search.album_ids) {
        albums = state.ui.search.album_ids.map((album_id) => {
            return (state.entities.albums[album_id]);
        });
    }

    if (state.ui.search.playlist_ids) {
        playlists = state.ui.search.playlist_ids.map((playlist_id) => {
            return (state.entities.playlists[playlist_id]);
        });
    }
    return {
        artists,
        songs,
        albums,
        playlists
    };
};

const mdp = dispatch => {
    return {
        searchArtists: queryString => dispatch(searchArtists(queryString)),
        clearSearch: () => dispatch(clearSearch()),
    };
};

export default connect(msp, mdp)(Search);
