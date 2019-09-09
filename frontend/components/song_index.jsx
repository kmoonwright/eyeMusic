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
        
        debugger
        return (
            <div className="song-index-container">
                <ul className="song-index">
                    {this.state.songs.map((song, idx) => {
                        return (
                            <li key={song.id} className="song-item">
                                {song}
                            </li>
                        )
                            {/* <li key={song.id}>{song.title}</li> */}
            
                    })}
                    {/* {this.state.songs.map((song, idx) => (
                        <SongIndexItem
                            key={song.id}
                            song={song}
                        >
                        </SongIndexItem>

                    ))} */}
                </ul>
            </div>
        )
    }
}

const msp = state => ({
    songs: Object.values(state.entities.songs)
})

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
})

export default connect(msp, mdp)(SongIndex);