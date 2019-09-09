import React from 'react';
import { connect } from 'react-redux';
import { fetchAllArtists, fetchOneArtist } from '../actions/music_actions'

class ArtistIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            artists: this.props.artists
        }
    }

    componentDidMount() {
        this.props.fetchAllArtists();
    }

    render() {
        if (this.props.artists.length > 0) {
            const artistList = this.props.artists.map(artist => {
                return (
                    <li key={artist.id} className="single-artist">
                        <div artist={artist}>Name: {artist.name}</div>
                    </li>
                )
            })
            return (
                <div className="artist-index-container">
                    <ul className="artist-index">
                        {artistList}
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}

const msp = state => ({
    artists: Object.values(state.entities.artists)
})

const mdp = dispatch => ({
    fetchAllArtists: () => dispatch(fetchAllArtists()),
    fetchOneArtist: (artistId) => dispatch(fetchOneArtist(artistId)),
})

export default connect(msp, mdp)(ArtistIndex);