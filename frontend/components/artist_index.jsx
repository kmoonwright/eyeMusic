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

                
                // const artistAlbums = this.props.albums[artist.id];
                // const albumSongs = this.props.songs.map(
                //     );

                return (
                    <div key={artist.id} className="artist-index-item">

                        <div className="artist-nav-item">
                            <img src={artist.photoUrl}></img>
                            <div artist={artist}>{artist.name}</div>
                        </div>

                        <ArtistIndexItem
                            key={artist.id}
                            artist={artist}
                        ></ArtistIndexItem>
                        {/* <div className="artist-index-detail">
                            {artist.albums.map(album => {
                                let albumSongs = this.props.songs.filter(song => song.album_id === album.id);
                                albumSongs = albumSongs.map(song => (
                                    <li>
                                        {song.title}
                                    </li>
                                ))
                                return (
                                    
                                    <div key={album.id} className="artist-index-detail-item">
                                        <img src={this.props.albums[album.id].imageUrl}></img>
                                        <ul>
                                            {albumSongs}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div> */}

                    </div>
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
    songs: Object.values(state.entities.songs),
    albums: state.entities.albums,
})

const mdp = dispatch => ({
    fetchAllArtists: () => dispatch(fetchAllArtists()),
    fetchOneArtist: (artistId) => dispatch(fetchOneArtist(artistId)),
    fetchAllSongs: () => dispatch(fetchAllSongs()),
})

export default connect(msp, mdp)(ArtistIndex);