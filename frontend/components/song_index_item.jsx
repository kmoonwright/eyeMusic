import React from 'react';
import { connect } from 'react-redux';
import { fetchAllSongs, fetchOneSong } from '../actions/music_actions'

class SongIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            artists: this.props.artists,
            songs: this.props.songs,
            albums: this.props.albums,
        }
    }

    render() {

        return (
            <div className="song-index-item">

            </div>
        )
    }
}

const msp = state => ({
    artists: Object.values(state.entities.artists),
    songs: Object.values(state.entities.songs),
    albums: Object.values(state.entities.albums),
})

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOneSong: (id) => dispatch(fetchOneSong(id)),

})

export default connect(msp, mdp)(SongIndexItem);

// const SongIndexItem = ({ song }) => (
//     <div>
//         <div className="song-index-item">
//             <span>{song.title}</span>
//             <span>{song.audioUrl}</span>
//         </div>
//         <div>
//             {song}
//         </div>
//     </div>
// );

// export default SongIndexItem;