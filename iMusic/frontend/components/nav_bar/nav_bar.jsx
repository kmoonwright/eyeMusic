import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    // const display = currentUser ? (
    //     <div>
    //         <h3>Welcome {currentUser.username}</h3>
    //         <button onClick={logout}>Logout</button>
    //     </div>
    // ) : (
    //     <div>
    //         <Link className="btn" to="/signup">Try it free*  </Link>
    //         <Link className="btn" to="/login">Log In</Link>
    //     </div>
    // );

    return (
        <div>
            <ul>
                <li>Library</li>
                <li>Explore</li>
                <li>Radio</li>
            </ul>
            {/* <header className="nav-bar">
                <h1 className="logo">iMusic</h1>
                <div>
                    {display}
                </div>
            </header> */}
        </div>
    )

}