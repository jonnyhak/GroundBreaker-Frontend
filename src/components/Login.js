import React, { Component } from 'react'

class Login extends Component {
    
    state = {
      username: "",
      password: "",
      loginErrors: ""
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault()

        console.log(this.state)
        // if (this.state.password === this.state.password_confirmation) {

            
        // } else {
        //     window.alert("password confirmation must match")
        // }
    }
    
    
    render() {
        // console.log(this.props)
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