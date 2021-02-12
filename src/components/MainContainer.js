
import React, { Component } from 'react'
import Projects from './Projects'
import Signup from './Signup'
import Login from './Login'
// import ProjectShow from './ProjectShow'

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

    // loginUser = (userObj) => {
    //     this.setState({currentUser: userObj})
    // }

    loginUser = (userObj) => {
        this.props.loginUser(userObj)
    }

    
    
    render() {
        console.log(this.state)
        return (
            //comment back in after testing 
            <div>
                {!this.props.currentUser ?
                <div className="cover">
                    <img src="/GBCover.jpeg" style={{height: "300px", width: "300px"}} alt=""/>
                    <Login users={this.state.users} loginUser={this.loginUser}/>
                    <br/>
                    <h2 style={{color: "white"}}>or</h2>
                    <br/>
                    <Signup users={this.state.users} loginUser={this.loginUser}/>
                </div>
                    : 
                    <Projects  projects={this.state.projects} users={this.state.users} currentUser={this.state.currentUser}/>
                }
                {/* <Projects  projects={this.state.projects} users={this.state.users} currentUser={this.state.currentUser}/> */}
            </div>
        )
    }
}

export default MainContainer
