import React, { Component } from 'react'

class Login extends Component {
    
    state = {
      username: "",
      password: ""
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault()

        let currentUser = this.props.users.find(user => 
            user.username == this.state.username && user.password == this.state.password
        )

        // this.props.loginUser(this.state)
        
        if (currentUser) {
            // console.log(currentUser)
            this.props.loginUser(currentUser)
        } else {
            window.alert("invalid username or password")
        }
    }
    
    
    render() {
        
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login