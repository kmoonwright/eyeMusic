import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header_container';

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <Header />

                <h1>Lose yourself in</h1>
                <h1>50 million songs.</h1>
                <button>Try it free</button>

            </div>
        )
    }
}

export default LandingPage;