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
            <div className="session-form">
                <h3>Sign Up</h3>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput("username")}
                            // onChange={e => this.setState({[username]: e.target.value})}
                        />
                    </label>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                            // onChange={e => this.setState({ [email]: e.target.value })}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                            // onChange={e => this.setState({ [password]: e.target.value })}
                        />
                    <button onClick={this.handleSubmit}>Submit</button>
                    </label>
                </form>
            </div>
        )
    }
}

export default Signup;