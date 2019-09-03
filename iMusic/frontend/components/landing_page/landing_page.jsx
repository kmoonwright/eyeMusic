import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header_container';

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <Header />
                
                <h1>VVELC0ME</h1>
                <ul>
                    <li>DIS IS</li>
                    <li>APP APP</li>
                </ul>
            </div>
        )
    }
}

export default LandingPage;