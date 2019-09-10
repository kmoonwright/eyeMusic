import React from 'react';
import { connect } from 'react-redux';
import { fetchAllArtists, fetchOneArtist } from '../actions/music_actions'
import ArtistIndexItem from './artist_index_item'

class ArtistIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            artists: this.props.artists,
            songs: this.props.songs,
            albums: this.props.albums,
        }
    }

    componentDidUpdate() {
    }

    render() {
        // ADD LOADING STATE
        if (this.props.songs.length < 1 || this.props.albums.length < 1 || this.props.artists.length < 1) {
            return <div className="loading-state">LOADING...</div>
        }
        
        if (this.props.artists.length > 0) {
            const artistList = this.props.artists.map(artist => {

                debugger

                return (
                    <li key={artist.id} className="artist-index-item">

                        <div className="artist-nav-item">
                            <div artist={artist}>Name: {artist.name}</div>
                            <img src={artist.photoUrl}></img>
                        </div>

                        <div className="artist-index-detail">
                            {/* <ArtistIndexItem
                                key={artist.id}
                                artist_albums={artist.albums}
                            >
                            </ArtistIndexItem> */}
                            {artist.albums.map(album => {
                            const albumSongs = this.props.songs
                                debugger
                                {/* const albumSongs = this.props.songs.map(song => {
                                    song.album_id === album.id;
                                }) */}
                                {/* const albumSongs = this.props.songs.album_id[album.id]; */}
                                return (
                                    <div className="artist-index-item">
                                        <img src={album.imageUrl}></img>
                                        <ul>
                                            {/* {albumSongs} */}
                                        </ul>
                                        {/* <ArtistIndexItem
                                            key={album.id}
                                            artist_albums={artist.albums}
                                        >
                                        </ArtistIndexItem> */}
                                    </div>
                                )
                            })}
                        </div>

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
    artists: Object.values(state.entities.artists),
    songs: state.entities.songs,
    albums: state.entities.albums,
})

const mdp = dispatch => ({
    fetchAllArtists: () => dispatch(fetchAllArtists()),
    fetchOneArtist: (artistId) => dispatch(fetchOneArtist(artistId)),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
})

export default connect(msp, mdp)(ArtistIndex);