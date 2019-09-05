import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header_container';

class LandingPage extends React.Component {

    render() {
        return (
            <div className="landing">
                <Header></Header>
                <div className="landing-content">
                    <div className="landing-logo">
                        <h3>Logo</h3>
                    </div>
                    <div className="landing-hero">
                        
                        <h1>Lose yourself in</h1>
                        <h1>50 million songs.</h1>
                        <button>
                            <Link className="btn" to="/signup">Try it free</Link>
                        </button>
                    </div>

                    <div className="landing-canvas">
                        <h1>It hits all the <br></br> right notes.</h1>

                        <h3>Stream 50 million songs ad-free.
                            <br/>Download your favorite tracks. Play them offline.
                            <br/>Get exclusive and original content.
                            <br/>Listen across all of your devices.
                        </h3>
                        <button>
                            <Link className="btn" to="/signup">Try it free</Link>
                        </button>
                    </div>

                    <div className="landing-cards">
                        <h1>It's as easy
                            <br/>as it sounds.
                        </h1>
                    </div>

                    <div className="landing-program-guide">
                        <h1>New and noteworthy.</h1>
                    </div>

                    <div className="footer">
                        <p>
                            Sunt in culpa qui officia deserunt mollit anim id 
                            est laborum consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                            Sunt in culpa qui officia deserunt mollit anim id 
                            est laborum consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                            Sunt in culpa qui officia deserunt mollit anim id 
                            est laborum consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                            Sunt in culpa qui officia deserunt mollit anim id 
                            est laborum consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                            Sunt in culpa qui officia deserunt mollit anim id 
                            est laborum consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                            Sunt in culpa qui officia deserunt mollit anim id 
                            est laborum consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                            Sunt in culpa qui officia deserunt mollit anim id 
                            est laborum consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <p>
                            Sunt in culpa qui officia deserunt mollit anim id 
                            est laborum consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default LandingPage;