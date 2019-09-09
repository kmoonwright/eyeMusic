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
        return (
            <div className="album-index">
                <p>ALBUM INDEX</p>
            </div>
        )
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