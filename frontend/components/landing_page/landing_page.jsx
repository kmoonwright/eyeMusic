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

                        <Link className="btn" to="/signup"><button>Try it free</button></Link>

                    </div>

                    <div className="landing-canvas">
                        <h2>It hits all the <br></br> right notes.</h2>

                        <h3>Stream 50 million songs ad-free.</h3>
                        <h3>Download your favorite tracks. Play them offline.</h3>
                        <h3>Get exclusive and original content.</h3>
                        <h3>Listen across all of your devices.</h3>
                        <Link className="btn" to="/signup"><button>Try it free</button></Link>
                    </div>

                    <div className="landing-cards-container">
                        <a name="overview"></a>
                        <h2>It's as easy
                            <br/>as it sounds.
                        </h2>
                    </div>

                    <a name="explore"></a>
                    <div className="landing-program-guide">
                        <h1>New and noteworthy.</h1>
                        <h3>Featured Artists</h3>
                        <div className="featured-artists-slideshow" id="landing-slideshow">
                            <div className="landing-slide-wrapper">
                                <Link to={'/signup'}>
                                    <div className="feature-bowie">
                                        <p>David Bowie</p>
                                    </div>
                                </Link>
                                <Link to={'/signup'}>
                                    <div className="feature-prince"></div>
                                </Link>
                                <Link to={'/signup'}>
                                    <div className="feature-daftpunk"></div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="landing-footer">
                        <h2>Start your free trial.</h2>
                        <h3>No commitment. Cancel anytime.</h3>
                        <Link className="btn" to="/signup"><button>Try it free</button></Link>

                        <div class="landing-social-container">
                            <p>
                                Developed by
                                <a href="http://www.kylemoonwright.com" target="_blank" class="landing-social-portfolio-link"> Kyle Moon-Wright</a>
                            </p>
                            <a href="https://www.linkedin.com/in/kyle-moon-wright/" target="_blank">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/kmoonwright" target="_blank">
                                <i class="fab fa-github-square"></i>
                            </a>
                            <a href="https://angel.co/kyle-moon-wright" target="_blank">
                                <i class="fab fa-angellist"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default LandingPage;