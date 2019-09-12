import React from 'react';
import { connect } from 'react-redux';

import { fetchAllSongs } from './../actions/music_actions';
import SongIndexItem from './song_index_item';
import { setCurrentSong, setQueue, toggleSong } from './../actions/music_player_actions';

class SongIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            artists: this.props.artists,
            songs: this.props.songs,
            albums: this.props.albums,
        }
        this.handlePlay = this.handlePlay.bind(this);
        this.getQueue = this.getQueue.bind(this);
    }

    handlePlay(song) {
        this.props.setCurrentSong(song);
        this.props.setQueue(this.props.songs);
        this.props.toggleSong();
    }

    getQueue(currSongIdx) {
        debugger
        let { songs } = this.props;
        let queue = songs.slice(currSongIdx).concat(songs.slice(0, currSongIdx))
        return queue;
    }

    render() {
        // ADD LOADING STATE
        if (this.props.songs.length < 1 || this.props.albums.length < 1 || this.props.artists.length < 1) {
            return <div className="loading-state">LOADING...</div>
        }

        if (this.props.songs.length > 0) {
            
            const songList = this.props.songs.map(song => { 
                
                
                const artistAlbum = this.props.albums[song.album_id];
                const artistName = this.props.artists[artistAlbum.artist_id].name;
                return (
                    <div key={song.id} onClick={() => this.handlePlay(song)} className="song-index-item">
                        <img src={artistAlbum.imageUrl}></img>
                        <div className="song-index-item-details">
                            <div className="song-index-item-details-songtitle">
                                <span>{song.title}</span>
                            </div>
                            <div className="song-index-item-details-artistinfo">
                                <span>{artistName}</span>
                            </div>
                            <div className="song-index-item-details-albumtitle">
                                <span>{artistAlbum.title}</span>
                            </div>
                            <div className="song-index-item-details-albumyear">
                                <span>{artistAlbum.year}</span>
                            </div>
                            {/* <div className="song-index-item-add-to-playlist">
                                <button>Add</button>
                            </div> */}

                        </div>
                    </div>
                )   
                // console.log(song)
                // return (
                //     <li key={song.id} className="single-song">
                //         {/* <SongIndexItem song={song}>{song.title}</SongIndexItem> */}
                //         <div>
                //             Title: {song.title}
                //             Artist: {song.artist}
                //             Album: {this.props.albums[song.album_id].title}
                //         </div>
                //     </li>
                // )
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
    }
}


const msp = state => ({
    artists: state.entities.artists,
    songs: Object.values(state.entities.songs),
    albums: state.entities.albums,
})

const mdp = dispatch => ({
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    fetchOneSong: (songId) => dispatch(fetchOneSong(songId)),
    setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
    toggleSong: () => (dispatch(toggleSong())),
    setQueue: (queue) => (dispatch(setQueue(queue))),

})

export default connect(msp, mdp)(SongIndex);