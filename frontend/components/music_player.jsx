import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentSong, toggleSong, setQueue } from '../actions/music_player_actions';


class MusicPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: this.props.song,
            current: 0,
            progress: 0,
            random: false,
            repeat: false,
            mute: false,
            playing: props.playing || false,
            songs: props.currQueue
        }
        this.setProgress = this.setProgress.bind(this);
        this.updateProgress = this.updateProgress.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.toggle = this.toggle.bind(this);
        this.end = this.end.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.randomize = this.randomize.bind(this);
        this.repeat = this.repeat.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    componentDidMount() {
        let playerElement = this.refs.player;
        playerElement.addEventListener('timeupdate', this.updateProgress);
        playerElement.addEventListener('ended', this.end);
        playerElement.addEventListener('error', this.next);
    }

    componentWillUnmount() {
        let playerElement = this.refs.player;
        playerElement.removeEventListener('timeupdate', this.updateProgress);
        playerElement.removeEventListener('ended', this.end);
        playerElement.removeEventListener('error', this.next);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.song != newProps.song) {
            this.setState({ active: newProps.song, songs: newProps.songs, playing: true, progress: 0 })
        }
    }

    setProgress(e) {
        let target = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
        let width = target.clientWidth;
        let rect = target.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        let duration = this.refs.player.duration;
        let currentTime = (duration * offsetX) / width;
        let progress = (currentTime * 100) / duration;

        this.refs.player.currentTime = currentTime;
        this.setState({ progress: progress });
        this.play();
    }

    updateProgress() {
        let duration = this.refs.player.duration;
        let currentTime = this.refs.player.currentTime;
        let progress = (currentTime * 100) / duration;

        this.setState({ progress: progress });
    }

    play() {
        // this.props.setCurrentSong(this.state.active);
        this.setState({ playing: true });
        this.refs.player.play();
    }

    pause() {
        this.setState({ playing: false });
        this.refs.player.pause();
    }

    toggle() {
        this.state.playing ? this.pause() : this.play();
    }

    end() {
        if (this.state.repeat) {
            this.play()
        } else {
            this.setState({ playing: false, progress: 0 });
            this.next();
        }
    }

    next() {
        var total = this.state.songs.length;
        var current = (this.state.repeat) ? this.state.current : (this.state.current < total - 1) ? this.state.current + 1 : 0;
        var active = this.state.songs[current];

        this.setState({ current: current, active: active, progress: 0 });
        this.props.setCurrentSong(active);

        this.refs.player.src = active.audioUrl;
        this.play();
    }

    previous() {
        var total = this.state.songs.length;
        var current = (this.state.current > 0) ? this.state.current - 1 : total - 1;
        var active = this.state.songs[current];

        this.setState({ current: current, active: active, progress: 0 });
        this.props.setCurrentSong(active);

        this.refs.player.src = active.audioUrl;
        this.play();
    }

    randomize() {
        var s = shuffle(this.state.songs.slice());
        this.setState({ songs: (!this.state.random) ? s : this.state.songs, random: !this.state.random });
        this.props.setQueue((!this.state.random) ? s : this.state.songs);
    }

    repeat() {
        this.setState({ repeat: !this.state.repeat });
    }

    toggleMute() {
        let mute = this.state.mute;

        this.setState({ mute: !this.state.mute });
        this.refs.player.volume = (mute) ? 1 : 0;
    }

    render() {
        let img;
        debugger
        if (!active.name) {
            img = (
                <div className='music-player-img-empty'>
                    <img></img>
                </div>
            )
        } else {
            img = (
                <div className='music-player-img-render'>
                    <Link to={`/albums/${active.albumId}`}>
                        <img src={active.imageUrl}></img>
                    </Link>
                </div>
            )
        }
        return(
            <div className="player-container">
                <div className="player-container-items">

                    <div className="music-player-interface">
                        <div className="music-player-btns">
                            <button onClick={this.previous} className="music-player-btns-prev" title="Previous Song">
                                Previous
                            </button>
                            <button onClick={this.toggle} className="music-player-btns-play" title="Play/Pause">
                                Play
                            </button>
                            <button onClick={this.next} className="music-player-btns-next" title="Next Song">
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

                        {img}

                        <div className="current-song-info">
                            <Link to={`/albums/${active.albumId}`}>
                                <h2 className="song-name">{active.name}</h2>
                            </Link>
                            <Link to={`/artists/${active.artistId}`}>
                                <h3 className="artist-name">{active.artistName}</h3>
                            </Link>
                        </div>

                        <div className="music-player-progress-container" onClick={this.setProgress}>
                            <span className="music-player-progress-value" style={{ width: progress + '%' }}></span>
                        </div>
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

const mapStateToProps = (state) => ({
    currQueue: state.ui.musicPlayer.queue
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
    toggleSong: () => (dispatch(toggleSong())),
    setQueue: (queue) => (dispatch(setQueue(queue)))
});


export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
