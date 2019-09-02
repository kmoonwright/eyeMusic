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

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state);
    }
    render() {
        return (
            <div className="login-form-container">
                <h3>Sign Up</h3>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={e => this.setState({username: e.target.value})}
                        />
                    </label>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="text"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}
