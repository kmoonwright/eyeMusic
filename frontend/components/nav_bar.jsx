import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions'

// export default ({ currentUser, logout }) => {
class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-index">
                    {/* <div className="navbar-history">
                        <button className="navbar-history-back"></button>
                        <button className="navbar-history-forward"></button>
                    </div> */}
                    <div className="navbar-btns">
                        <button>
                            <Link to="/library">Library</Link>
                        </button>
                        <button>
                            <Link to="/browse">Browse</Link>
                        </button>
                        <button>
                            <Link to="/search">Search</Link>
                        </button>
                    </div>
                    <div className="navbar-profile">
                        <p>Welcome {this.props.currentUser.username}!</p>
                        <button id="logout-btn" onClick={this.props.logout}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = state => ({
    currentUser: state.session.currentUser
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(NavBar);