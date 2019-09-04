import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header_container';

class LandingPage extends React.Component {

    render() {
        return (
            <div className="landing">

                <Header></Header>

                <div className="landing-img">
                    <ul>
                        <h1>Lose yourself in</h1>
                        <h1>50 million songs.</h1>
                        <button>
                            <Link className="btn" to="/signup">Try it free</Link>
                        </button>
                    </ul>
                </div>

            </div>
        )
    }
}

export default LandingPage;