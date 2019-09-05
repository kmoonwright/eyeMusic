import React from 'react';

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
                <div className="session-form">
                    <div className="session-form-header">
                        <p>Logo</p>
                        <p>Sign up for a new account</p>
                    </div>

                    <div className="session-form-input">
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
                            <button onClick={this.handleSubmit}>Sign Up!</button>
                            </label>
                        </form>
    
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;