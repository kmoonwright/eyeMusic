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
            mute: false,
        }

        this.audio = new Audio();
        // this.audio.src = audioUrl;

        // this.play = this.play.bind(this);
        // this.pause = this.pause.bind(this);
        this.toggle = this.toggle.bind(this);
        this.end = this.end.bind(this);
        this.nextSong = this.nextSong.bind(this);
        this.prevSong = this.prevSong.bind(this);
        this.randomize = this.randomize.bind(this);
        this.repeat = this.repeat.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

// everything depends on props



    // componentDidMount() {
    //     let playerElement = this.refs.player;
    //     playerElement.addEventListener('timeupdate', this.updateProgress);
    //     playerElement.addEventListener('ended', this.end);
    //     playerElement.addEventListener('error', this.next);
    // }

    // componentWillUnmount() {
    //     let playerElement = this.audio;
    //     playerElement.removeEventListener('timeupdate', this.updateProgress);
    //     playerElement.removeEventListener('ended', this.end);
    //     playerElement.removeEventListener('error', this.next);
    // }

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
    
    // play() {
    //     // this.props.setCurrentSong(this.state.active);
    //     // this.setState({ playing: true });
    //     debugger
    //     this.audio.src = active.audioUrl;
    //     this.audio.play();
    // }

    // pause() {
    //     // this.setState({ playing: false });
    //     this.audio.pause();
    // }

    toggle() {
        //toggle song dispatch action to set a new slice of state
        // musicPlayer.ui.playing change
        // buttons should only swap out pieces of state

        this.props.toggleSong();

        // this.props.playing ? this.audio.pause() : this.audio.play();

        // if (oldProps.playing === true && this.props.playing === false) {
        //     this.audio.pause();
        // } else if (oldProps.playing === false && this.props.playing === true) {
        //     this.audio.play();
        // }
    }

    end() {
        if (this.state.repeat) {
            this.play()
        } else {
            // this.setState({ playing: false, progress: 0 });
            this.next();
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

    prevSong() {
        let total = this.state.songs.length;
        let current = (this.state.current > 0) ? this.state.current - 1 : total - 1;
        let active = this.state.songs[current];

        // this.setState({ current: current, active: active, progress: 0 });
        this.props.setCurrentSong(active);

        this.audio.src = active.audioUrl;
        this.play();
    }

    randomize() {
        let s = shuffle(this.state.songs.slice());
        this.setState({ songs: (!this.state.random) ? s : this.state.songs, random: !this.state.random });
        this.props.setQueue((!this.state.random) ? s : this.state.songs);
    }

    repeat() {
        this.setState({ repeat: !this.state.repeat });
    }

    toggleMute() {
        let mute = this.state.mute;

        this.setState({ mute: !this.state.mute });
        this.audio.volume = (mute) ? 1 : 0;
    }

    render() {
        
        return (

            <div className="player-container">
                <div className="player-container-items">

                    <div className="music-player-interface">
                        <div className="music-player-btns">
                            <button onClick={this.previous} className="music-player-btns-prev" title="Previous Song">
                                Previous
                            </button>
                            <button onClick={this.toggle} className="music-player-btns-play" title="Play/Pause">
                                Play/Pause
                            </button>
                            <button onClick={this.nextSong} className="music-player-btns-next" title="Next Song">
                                Next
                            </button>
                            {/* <button onClick={this.next} className="music-player-btns-volume" title="Volume">
                                Volume
                            </button> */}
                            <button onClick={this.toggleMute} className="music-player-btns-mute" title="Mute/Unmute">
                                Mute
                            </button>
                            <button onClick={this.randomize} className="music-player-btns-shuffle" title="Shuffle">
                                Shuffle
                            </button>
                        </div>
                    </div>
                
                    <div className="music-player-display">
                    </div>

                    <div className="search-btn">
                        <button>
                            <Link to="/search">Search</Link>
                        </button>
                    </div>

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
