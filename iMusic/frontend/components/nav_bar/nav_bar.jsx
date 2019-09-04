import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h5>Welcome {currentUser.username}</h5>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            <Link className="btn" to="/signup">Try it free*  </Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>
    );

    return (
        <div>
            <h3>NavBar</h3>
            <ol>
                <button>Back</button>
                <button>Forward</button>
            </ol>
            <ul>
                <button>Library</button>
                <button>Explore</button>
                <button>Radio</button>
            </ul>
            {display}
            {/* <header className="nav-bar">
                <h1 className="logo">iMusic</h1>
                <div>
                    {display}
                </div>
            </header> */}
        </div>
    )

}