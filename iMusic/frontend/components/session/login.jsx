import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            username: "",
            password: "",
        };

        this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return (
            <div className="session-form">
                <h2>Login Here!</h2>
                <form>
                    <label>Username:
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={e => this.setState({ username: e.target.value })}
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="text"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;