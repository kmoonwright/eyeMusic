import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        debugger
        this.props.logout()
        // .then(() => this.props.history.push('/'));
    }

    render() {

        const refreshPage = () => {
            window.location.reload();
        }

        return (
            <div className="landing-header">
                <div className="header-logo">
                    <button className="header-icon" onClick={refreshPage}></button>
                    <div className="header-text" onClick={refreshPage}>
                        <button><p>eyeMUSIC</p></button>
                    </div>
                </div>

                <div className="landing-nav">
                    <div className="landing-nav-jumpers">
                        <a href="#overview">Overview</a>
                        <a href="#explore">Explore</a>
                        {/* <button>
                            <Link to="/login">SplashNav</Link>
                        </button> */}
                    </div>

                    <div className="landing-nav-signup">
                        <Link to="/signup"><button>Try it free*</button></Link>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default Header;