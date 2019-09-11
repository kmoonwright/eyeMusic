import React from 'react';
import { connect } from 'react-redux';

import { searchArtists, clearSearch } from '../actions/search_actions'

class Search extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.state = { searchTerm: '' };
    }

    renderResults() {
        return (
            <div>
                SEARCH RESULTS RENDER
            </div>
        )
    }

    updateInput(e) {
        let val = e.target.value
        this.setState({ searchTerm: val });
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        let searchTerm = this.state.searchTerm;
        this.setState({ title: '' });
        this.props.fetchSearchedSongs(searchTerm)
            .then(() => this.renderResults());
    }

    render () {
        return (
            <div className="search-container">
                <p>Search for tunes...</p>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.updateInput}
                        placeholder="How did it go again...?"
                    >
                    </input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const msp = state => {
    let artists = [];
    let albums = [];
    let playlists = [];
    if (state.ui.search.artist_ids) {
        artists = state.ui.search.artist_ids.map((artist_id) => {
            return (state.entities.artists[artist_id]);
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

// const msp = state => ({
//     currentUser: state.session.currentUser
// })

// const mdp = dispatch => ({
//     fetchSearchedSongs: (searchTerm) => dispatch(fetchSearchedSongs(searchTerm)),
//     fetchSearchedArtists: (searchTerm) => dispatch(fetchSearchedArtists(searchTerm)),
//     fetchSearchedAlbums: (searchTerm) => dispatch(fetchSearchedAlbums(searchTerm)),
//     fetchSearchedPlaylists: (searchTerm) => dispatch(fetchSearchedPlaylists(searchTerm)),
// })

// export default connect(msp, mdp)(Search);