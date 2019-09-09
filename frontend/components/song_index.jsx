import React from 'react';
import { connect } from 'react-redux';

import { fetchAllSongs } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            songs: this.props.songs
        }
    }

    componentDidMount() {
        this.props.fetchAllSongs();
    }

    render() {
        if (this.props.songs.length > 0) {
            const songList = this.props.songs.map(song => {
                return (
                    <li key={song.id} className="single-song">
                        {/* <SongIndexItem song={song}>{song.title}</SongIndexItem> */}
                        <div song={song}>Title: {song.title}</div>
                    </li>
                )
            })
            return (
                <div className="song-index-container">
                    <ul className="song-index">
                        {songList}
                    </ul>
                </div>
                )
        } else {
            return null;
        }

        // return (
        //     <div className="song-index-container">
        //         <ul className="song-index">
        //             {songList},
        //             {/* {/* {
        //                 return (
        //                     <li key={song.id} className="song-item">
        //                         {song}
        //                     </li>
        //                 )
        //                     <li key={song.id}>{song.title}</li>
            
        //             } */}, */}
        //             {this.state.songs.map((song, idx) => (
        //                 <SongIndexItem
        //                     key={song.id}
        //                     song={song}
        //                 >
        //                 </SongIndexItem>

        //             ))}
        //         </ul>
        //     </div>
        // )
    }
}

const msp = state => ({
    songs: Object.values(state.entities.songs)
})

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOneSong: (songId) => dispatch(fetchOneSong(songId)),
})

export default connect(msp, mdp)(SongIndex);