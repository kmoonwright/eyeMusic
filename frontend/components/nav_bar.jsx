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
        const display = this.props.currentUser ? (
            <div>
                <p>{this.props.currentUser.username}</p>
                <p onClick={this.props.logout}>Logout</p>
                {/* <button>{this.props.currentUser.username}</button>
                <button onClick={this.props.logout}>Logout</button> */}
            </div>
        ) : (
            <div>
                <Link className="btn" to="/signup">Try it free*  </Link>
                <Link className="btn" to="/login">Log In</Link>
            </div>
        );
        return (
            <div className="navbar">
                <div className="navbar-history">
                    <ol>
                        <button>Back</button>
                        <button>Forward</button>
                    </ol>
                </div>
                <div className="navbar-btns">
                    <ol>
                        <button>
                            <Link to="../library">Library</Link>
                        </button>
                        <button>
                            <Link to="../browse">Browse</Link>
                        </button>
                        <button>
                            <Link to="../radio">Radio</Link>
                        </button>
                    </ol>
                </div>
                <div className="navbar-profile">
                    {display}
                </div>
                {/* <header className="nav-bar">
                    <h1 className="logo">iMusic</h1>
                    <div>
                        {display}
                    </div>
                </header> */}
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