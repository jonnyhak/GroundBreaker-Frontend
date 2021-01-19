
import React, { Component } from 'react'
import Projects from './Projects'
import Signup from './Signup'
import Login from './Login'

class MainContainer extends Component {
    
    state = {
        projects: [],
        users: [],
        currentUser: null
    }

    componentDidMount() {
        fetch('http://localhost:3000/projects')
        .then(response => {
            return response.json()
        })
        .then(arr => {
            this.setState({
            projects: arr
            })
        })

        fetch('http://localhost:3000/users')
        .then(response => {
            return response.json()
        })
        .then(arr => {
            this.setState({
            users: arr
            })
        })
    }

    loginUser = (userObj) => {
        this.setState({currentUser: userObj.username})
    }

    
    
    render() {
        console.log(this.state)
        return (
            <div>
                <Login users={this.state.users} loginUser={this.loginUser}/>
                <Signup />
                <Projects  projects={this.state.projects}/>
            </div>
        )
    }
}

export default MainContainer
