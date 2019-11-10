import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNextSong, fetchPrevSong, togglePlay } from '../actions/current_song_actions';
import { setCurrentSong, setQueue, toggleSong } from './../actions/music_player_actions';


const msp = state => ({
    // playing: state.ui.musicPlayer.playing,
    // currentSong: state.ui.musicPlayer.currentSong,
    artists: state.entities.artists,
    songs: Object.values(state.entities.songs),
    albums: state.entities.albums,
    queue: state.ui.musicPlayer.queue,
});

const mdp = dispatch => {
    return {
        togglePlay: (boolean) => dispatch(togglePlay(boolean)),
        fetchNextSong: (songId) => dispatch(fetchNextSong(songId)),
        fetchPrevSong: (songId) => dispatch(fetchPrevSong(songId)),
        toggleSong: () => (dispatch(toggleSong())),
        setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
    };
};


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
            currentTime: 0,
            progress: 0,
            random: false,
            repeat: false,

            volumeBeforeMute: 0.45,
            currentVolume: 0.45,
            mute: false,
            playing: false
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
        this.convertSecondsToMinutes = this.convertSecondsToMinutes.bind(this);
        this.setPlaybackTime = this.setPlaybackTime.bind(this);
        this.handleMusicBarUpdate = this.handleMusicBarUpdate.bind(this);
    }

    // everything depends on props

    componentDidMount() {
        if (this.props.currentSong.playing) {
            this.audio.play();
            this.state.playing = true;
        } else {
            this.audio.pause();
            this.state.playing = false;
        }
        this.timeInterval = setInterval(this.handleMusicBarUpdate, 400);
    }

    componentDidUpdate(oldProps) {
        // need conditionals to prevent unneeded operations
        // checks props passed in component
        // all functionality of player goes here
        if (!this.props.currentSong) return;
        if (this.props.currentSong !== oldProps.currentSong) {
            this.audio.src = this.props.currentSong.audioUrl;
            this.audio.play();
            this.state.playing = true;
        } else if (this.props.playing) {
            this.audio.play();
            this.state.playing = true;
        } else {
            this.audio.pause();
            this.state.playing = false;
        }
        //check if state changed
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }
    togglePlay() {
        //toggle song dispatch action to set a new slice of state
        // musicPlayer.ui.playing change
        // buttons should only swap out pieces of state
        this.state.playing ? this.state.playing = false : this.state.playing = true;
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
        if (this.state.muted === false) {
            this.setState({ currentVolume: 0 });
            this.setState({ muted: true });
            this.audio.volume = 0;
        } else {
            this.setState({ currentVolume: this.state.volumeBeforeMute });
            this.setState({ muted: false });
            this.audio.volume = this.state.volumeBeforeMute;
        }
    }
    // toggleMute() {
    //     let mute = this.state.mute;
    //     this.setState({ mute: !this.state.mute });
    //     this.audio.volume = (mute) ? 1 : 0;
    // }

    setVolume(e) {
        this.audio.volume = e.target.value;
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
    handleMusicBarUpdate() {
        this.setState({
            currentTime: this.audio.currentTime
        });
    }

    setPlaybackTime(e) {
        this.audio.currentTime = e.target.value;
        this.setState({
            currentTime: e.target.value
        });
    }

    convertSecondsToMinutes(sec) {
        let minutes = Math.floor(sec / 60);
        let finalMinutes = minutes < 60 ? minutes : 0;
        const seconds = Math.floor(sec) % 60;
        const finalSeconds = seconds < 10 ? `:0${seconds}` : `:${seconds}`;

        if (finalMinutes < 10) finalMinutes = `0${finalMinutes}`;
        else finalMinutes = `${finalMinutes}`;

        let finalTime = finalMinutes + finalSeconds;
        return finalTime;
    }

    render() {
        let currentSongTitle = this.props.currentSong.title
        let currentSongArtist = this.props.currentSong.artistName
        let currentSongAlbum = this.props.currentSong.albumTitle

        let volumeIcon;
        if (this.state.currentVolume === 0) {
            volumeIcon = "mute";
        } else if (this.state.currentVolume >= 0.65) {
            volumeIcon = "up";
        } else if (this.state.currentVolume >= 0.05 && this.state.currentVolume < 0.65) {
            volumeIcon = "down";
        } else if (this.state.currentVolume < 0.05) {
            volumeIcon = "off";
        }
        
        let displayBar;
        if (this.state.playing) {
            displayBar = (
                <div className="music-player-display">
                    <div className="music-player-display-current-song-details">
                        <p>{currentSongTitle}</p>
                        <p>{currentSongArtist}  -  {currentSongAlbum}</p>
                    </div>
                    <div className="music-player-display-current-song-progress">
                        <p className="music-bar-time-left">{this.convertSecondsToMinutes(this.state.currentTime)}</p>
                        <div className="progress-bar">
                            <input
                                type="range"
                                className="music-progress-bar"
                                min="0"
                                max={length}
                                step="1"
                                onChange={this.setPlaybackTime} />

                            <div className="outer-music-bar">
                                <div className="inner-music-bar" style={{ width: `${100 * (this.state.currentTime / this.audio.duration) || 0}%` }}></div>
                                <div className="progress-ball" style={{ marginLeft: `${100 * (this.state.currentTime / this.audio.duration) || 0}%` }}></div>
                            </div>
                        </div>
                        <p className="music-bar-time-right">{this.convertSecondsToMinutes(this.audio.duration)}</p>
                    </div>
                </div>
            )
        } else {
            displayBar = (
                <div className="landing-logo"></div>
            )
        }

        return (
            <div className="player-container">
                <div className="player-container-items">

                    <div className="music-player-interface">
                        <div className="music-player-btns">
                            <button onClick={this.prevSong} className="music-player-btns-prev"title="Previous Song"></button>
                            <button onClick={this.togglePlay} 
                                className={this.state.playing ? "music-player-btns-pause" : "music-player-btns-play"}
                                title="Play/Pause">
                            </button>
                            <button onClick={this.nextSong} className="music-player-btns-next" title="Next Song"></button>
                            {/* <button onClick={this.next} className="music-player-btns-volume" title="Volume">
                                Volume
                            </button> */}
                            {/* <button onClick={this.toggleMute} className="music-player-btns-mute" 
                                title="Mute/Unmute"></button>
                            <button onClick={this.toggleMute} className="music-player-btns-volume" 
                                title="Volume"></button>
                            <button onClick={this.randomize} className="music-player-btns-shuffle" 
                                title="Shuffle"></button> */}

                            <div className="volume-bar">
                                <button id="volume-button" onClick={this.toggleMute}>
                                    <i className={`fas fa-volume-${volumeIcon}`}></i>
                                </button>
                                <div className="volume-bar-wrapper">
                                    <div className="outer-volume-bar">
                                    <input type="range"
                                        className="volume-progress-bar"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        onChange={this.setVolume}
                                    ></input>
                                        <div className="inner-volume-bar" style={{ width: `${100 * (this.state.currentVolume / 1)}%` }}></div>
                                        <div className="progress-ball-volume" style={{ marginLeft: `${100 * (this.state.currentVolume / 1)}%` }}></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                
                    {displayBar}

                    <Link to="/search"><button className="search-btn"></button></Link>

                </div>
            </div>
        )
    }
}


export default connect(msp, mdp)(MusicPlayer);