import React from 'react';
import { connect } from 'react-redux';
import { fetchAllArtists, fetchOneArtist } from '../actions/music_actions'
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';

import ArtistIndexItem from './artist_index_item'
import ArtistIndexDetail from './artist_index_detail'

const msp = state => ({
    artists: Object.values(state.entities.artists),
    songs: Object.values(state.entities.songs),
    albums: state.entities.albums,
})

const mdp = dispatch => ({
    fetchAllArtists: () => dispatch(fetchAllArtists()),
    fetchOneArtist: (artistId) => dispatch(fetchOneArtist(artistId)),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
})


class ArtistIndex extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     artists: this.props.artists,
        //     songs: this.props.songs,
        //     albums: this.props.albums,
        // }
    }

    componentDidUpdate() {
    }

    render() {
        // ADD LOADING STATE
        if (this.props.songs.length < 1 || this.props.albums.length < 1 || this.props.artists.length < 1) {
            return <div className="loading-state">LOADING...</div>
        }
        
        return (
            <div className="artist-index-container">

                <ul className="artist-index">
                    {this.props.artists.map(artist => {
                        return (
                            <ArtistIndexItem key={artist.id} artist={artist}></ArtistIndexItem>
                        )
                    })}
                </ul>

                <ProtectedRoute path="/library/artists/:artistId" component={ArtistIndexDetail}></ProtectedRoute>

            </div>
        )

    }
}

export default connect(msp, mdp)(ArtistIndex);