import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    render() {
        return (
            <div className="session-form-container">
                <div className="session-form-logo">
                    <h3>iMUSIC</h3>
                </div>
                <div className="session-form">
                    <div className="session-form-header">
                        <div className="session-form-icon"></div>
                    </div>

                    <div className="session-form-input">
                        <p>Let's get back at it.</p>
                        <form>
                            <label>
                                <input 
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput("username")}
                                    placeholder="Username"
                                    // onChange={e => this.setState({ [username]: e.target.value })}
                                />
                            </label>
                            <label>
                                <input 
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput("password")}
                                    placeholder="Password"
                                    // onChange={e => this.setState({ [password]: e.target.value })}
                                />
                            </label>
                            <button onClick={this.handleSubmit}>Login</button>
                        </form>
                    </div>
                    <div className="session-form-link">
                        <p>Not a member? <Link to="/signup">Sign up</Link> today!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;