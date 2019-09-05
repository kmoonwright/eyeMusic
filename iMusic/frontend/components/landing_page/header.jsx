import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        this.props.logout()
        // .then(() => this.props.history.push('/'));
    }

    render() {
        // const { currentUser } = this.props;
        // const display = currentUser ? (
        //     <ul className="landing-header-nav">
        //         <h3 className="nav-welcome">Welcome {currentUser.username}!</h3>
        //         <button onClick={this.logoutUser} className="nav-logout">Logout</button>
        //     </ul>
        // ) : (
        //     <ul className="landing-header-nav">
        //         <h1>iMusic</h1>
        //         <Link className="btn" to="/signup">Try it free*</Link>
        //         <Link className="btn" to="/login">Log In</Link>
        //     </ul>

        // );


        return (
            <div className="landing-header">
                <div className="header-logo">
                    <div className="logo">
                        <p>iMUSIC</p>
                    </div>
                </div>

                <div className="landing-nav">
                    <div className="landing-nav-menu">
                        <a href="#overview">Overview</a>
                        <a href="#explore">Explore</a>
                        {/* <button>
                            <Link to="/login">SplashNav</Link>
                        </button> */}
                    </div>

                    <div className="landing-nav-signup">
                        <button>
                            <Link to="/signup">Try it free*</Link>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;