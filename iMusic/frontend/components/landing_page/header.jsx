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
        const { currentUser } = this.props;
        const display = currentUser ? (
            <div className="landing-header">
                <h3 className="nav-welcome">Welcome {currentUser.username}!</h3>
                <button onClick={this.logoutUser} className="nav-logout">Logout</button>
            </div>
        ) : (
            <ul className="landing-header">
                <h1>iMusic</h1>
                <Link className="btn" to="/signup">Try it free*</Link>
                <Link className="btn" to="/login">Log In</Link>
            </ul>

        );

            
        return (
            <div>
                { display }
            </div>
        )
    }
}

export default Header;