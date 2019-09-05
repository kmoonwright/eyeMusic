import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header_container';

// import logo from '../../app/assets/images/icon'

class LandingPage extends React.Component {

    render() {
        return (
            <div className="landing">
                <a name="overview"></a>

                <Header></Header>
                <div className="landing-content">

                    <div className="landing-logo"></div>

                    <div className="landing-hero">
                        <h1>Lose yourself in</h1>
                        <h1>50 million songs.</h1>
                        <button>
                            <Link className="btn" to="/signup">Try it free</Link>
                        </button>
                    </div>

                    <div className="landing-canvas">
                        <h2>It hits all the <br></br> right notes.</h2>

                        <h3>Stream 50 million songs ad-free.</h3>
                        <h3>Download your favorite tracks. Play them offline.</h3>
                        <h3>Get exclusive and original content.</h3>
                        <h3>Listen across all of your devices.</h3>
                        <button>
                            <Link className="btn" to="/signup">Try it free</Link>
                        </button>
                    </div>

                    <div className="landing-cards">
                        <a name="overview"></a>
                        <h2>It's as easy
                            <br/>as it sounds.
                        </h2>
                    </div>

                    <div className="landing-program-guide">
                        <a name="explore"></a>
                        <h1>New and noteworthy.</h1>
                        <h3>Now Playing</h3>
                        <h3>Featured Playlists</h3>
                    </div>

                    <div className="landing-footer">
                        <h2>Start your free trial.</h2>
                        <h3>No commitment. Cancel anytime.</h3>
                        <button>
                            <Link className="btn" to="/signup">Try it free</Link>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default LandingPage;