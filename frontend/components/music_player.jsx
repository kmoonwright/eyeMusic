import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNextSong, fetchPrevSong, togglePlay } from '../actions/current_song_actions';
import { setCurrentSong, setQueue, toggleSong } from './../actions/music_player_actions';


class MusicPlayer extends React.Component {

    constructor(props) {
        super(props);

        // ANDY NOTES
        // this.audio = new Audio();
        // this.audio.src = audioUrl;
        // then we can call play on audio instance var

        //componentDidUpdate
        // need conditionals to prevent unneeded operations
        // checks props passed in component
        // all functionality of player goes here
        this.state = {
            current: 0,
            progress: 0,
            random: false,
            repeat: false,

            volumeBeforeMute: 0.65,
            currentVolume: 0.65,
            mute: false,
        }

        this.audio = new Audio();
        // this.audio.src = audioUrl;

        // this.play = this.play.bind(this);
        // this.pause = this.pause.bind(this);
        // this.end = this.end.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.prevSong = this.prevSong.bind(this);
        // this.randomize = this.randomize.bind(this);
        // this.repeat = this.repeat.bind(this);

        this.toggleMute = this.toggleMute.bind(this);
        this.setVolume = this.setVolume.bind(this);
    }

    // everything depends on props

    componentDidMount() {
        // if (this.props.playing) { 
        //     this.audio.play();
        // } else {
        //     this.audio.play();
        // }
    }

    componentDidUpdate(oldProps) {
        // need conditionals to prevent unneeded operations
        // checks props passed in component
        // all functionality of player goes here
        if (!this.props.currentSong) return;
        if (this.props.currentSong !== oldProps.currentSong) {
            this.audio.src = this.props.currentSong.audioUrl;
            this.audio.play();
        } else if (this.props.playing) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
        //check if state changed
    }

    togglePlay() {
        //toggle song dispatch action to set a new slice of state
        // musicPlayer.ui.playing change
        // buttons should only swap out pieces of state

        this.props.toggleSong();
    }

    // end() {
    //     if (this.state.repeat) {
    //         this.play()
    //     } else {
    //         // this.setState({ playing: false, progress: 0 });
    //         this.next();
    //     }
    // }

    prevSong() {
        let songs = this.props.queue;
        const currentSong = this.props.currentSong;
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].id === currentSong.id) {
                const prevSong = (i === 0) ? null : songs[i - 1];
                this.props.setCurrentSong(prevSong);
            }
        }
    }

    nextSong() {
        let songs = this.props.queue;
        const currentSong = this.props.currentSong;
        for (let i = 0; i < songs.length; i++) {
            if (songs[i].id === currentSong.id) {
                const nextSong = (i === songs.length - 1) ? songs[0] : songs[i + 1];
                this.props.setCurrentSong(nextSong);
            }
        }
    }

    toggleMute() {
        let mute = this.state.mute;
        this.setState({ mute: !this.state.mute });
        this.audio.volume = (mute) ? 1 : 0;
    }

    setVolume(e) {
        this.audio.currentSong.volume = e.target.value;
        this.setState({ currentVolume: e.target.value })
        this.setState({ volumeBeforeMute: e.target.value })
    }

    // randomize() {
    //     let s = shuffle(this.state.songs.slice());
    //     this.setState({ songs: (!this.state.random) ? s : this.state.songs, random: !this.state.random });
    //     this.props.setQueue((!this.state.random) ? s : this.state.songs);
    // }

    // repeat() {
    //     this.setState({ repeat: !this.state.repeat });
    // }


    render() {
        return (

            <div className="player-container">
                <div className="player-container-items">

                    <div className="music-player-interface">
                        <div className="music-player-btns">
                            <button onClick={this.prevSong} className="music-player-btns-prev" 
                                title="Previous Song"></button>
                            <button onClick={this.togglePlay} className="music-player-btns-play" 
                                title="Play/Pause"></button>
                            <button onClick={this.nextSong} className="music-player-btns-next" 
                                title="Next Song"></button>
                            {/* <button onClick={this.next} className="music-player-btns-volume" title="Volume">
                                Volume
                            </button> */}
                            <button onClick={this.toggleMute} className="music-player-btns-mute" 
                                title="Mute/Unmute"></button>
                            <button onClick={this.toggleMute} className="music-player-btns-volume" 
                                title="Volume"></button>
                            <button onClick={this.randomize} className="music-player-btns-shuffle" 
                                title="Shuffle"></button>
                        </div>
                    </div>
                
                    <div className="music-player-display">
                    </div>

                    <Link to="/search"><button className="search-btn"></button></Link>

                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     currQueue: state.ui.musicPlayer.queue
// });
const msp = state => ({
    // playing: state.ui.musicPlayer.playing,
    // currentSong: state.ui.musicPlayer.currentSong,
    queue: state.ui.musicPlayer.queue,
});
// const mapDispatchToProps = (dispatch) => ({
//     setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
//     toggleSong: () => (dispatch(toggleSong())),
//     setQueue: (queue) => (dispatch(setQueue(queue)))
// });
const mdp = dispatch => {
    return {
        togglePlay: (boolean) => dispatch(togglePlay(boolean)),
        fetchNextSong: (songId) => dispatch(fetchNextSong(songId)),
        fetchPrevSong: (songId) => dispatch(fetchPrevSong(songId)),
        toggleSong: () => (dispatch(toggleSong())),
        setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
    };
};


export default connect(msp, mdp)(MusicPlayer);
