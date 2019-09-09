import React from 'react';
import { connect } from 'react-redux';
import { fetchAllAlbums, fetchOneAlbum } from '../actions/music_actions'

class AlbumIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            albums: this.props.albums
        }
    }

    componentDidMount() {
        this.props.fetchAllAlbums();
    }

    render() {
        if (this.props.albums.length > 0) {
            const albumList = this.props.albums.map(album => {
                return (
                    <li key={album.id} className="single-album">
                        <div album={album}>
                            Title: {album.title}, 
                            Year: {album.year},
                            <ul>
                                
                            </ul>
                        </div>
                    </li>
                )
            })
            return (
                <div className="album-index-container">
                    <ul className="album-index">
                        {albumList}
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }
}

const msp = state => ({
    albums: Object.values(state.entities.albums)
})

const mdp = dispatch => ({
    fetchAllAlbums: () => dispatch(fetchAllAlbums()),
    fetchOneAlbum: (albumId) => dispatch(fetchOneAlbum(albumId)),
})

export default connect(msp, mdp)(AlbumIndex);