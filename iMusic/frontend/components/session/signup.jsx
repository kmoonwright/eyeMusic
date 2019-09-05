import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value});
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
                        <p>Sign up for a new account</p>
                        <form>
                            <label>
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput("username")}
                                    placeholder="Username"
                                    // onChange={e => this.setState({[username]: e.target.value})}
                                />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput("email")}
                                    placeholder="Email"
                                    // onChange={e => this.setState({ [email]: e.target.value })}
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
                            <div className="session-form-btn">
                                <button onClick={this.handleSubmit}>Sign Up!</button>
                                <button onClick={this.handleSubmit}>Demo User</button>
                            </div>
                        </form>
                    </div>

                    <div className="session-form-link">
                        <p>Already a member? <Link to="/login">Log in</Link> instead.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;