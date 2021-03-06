import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import ProjectShow from './components/ProjectShow'
import UserShow from './components/UserShow'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Signup from './components/Signup'
import './App.css';

class App extends Component {
  
  state = {
    currentUser: null
  }

  loginUser = (userObj) => {
    this.setState({currentUser: userObj})
  }

  logout = () => {
    this.setState({currentUser: null})
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} logout={this.logout}/>
        <Switch>
          {/* <Route path="/projects/:id" component={ProjectShow}/> */}
          <Route path="/projects/:id" render={(props) => <ProjectShow {...props} currentUser={this.state.currentUser} />}/>
          <Route path="/users/:id" render={(props) => <UserShow {...props} currentUser={this.state.currentUser} />}/>
          {/* <Route path="/users/:id" component={UserShow}/> */}
          {/* <Route path="/" component={MainContainer}/> */}
          <Route path="/" render={() => <MainContainer loginUser={this.loginUser} currentUser={this.state.currentUser}/>}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </div>
    );
  }
}

export default App;
