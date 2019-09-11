import React from 'react';
import { connect } from 'react-redux';

import { 
    fetchSearchedSongs, 
    fetchSearchedArtists, 
    fetchSearchedAlbums, 
    fetchSearchedPlaylists } 
from '../actions/session_actions'

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

const msp = state => ({
    currentUser: state.session.currentUser
})

const mdp = dispatch => ({
    fetchSearchedSongs: (searchTerm) => dispatch(fetchSearchedSongs(searchTerm)),
    fetchSearchedArtists: (searchTerm) => dispatch(fetchSearchedArtists(searchTerm)),
    fetchSearchedAlbums: (searchTerm) => dispatch(fetchSearchedAlbums(searchTerm)),
    fetchSearchedPlaylists: (searchTerm) => dispatch(fetchSearchedPlaylists(searchTerm)),
})

export default connect(msp, mdp)(Search);