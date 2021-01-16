import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import ProjectShow from './components/ProjectShow'
import './App.css';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <Switch>
          <Route path="/projects/:id" component={ProjectShow}/>
          <Route path="/" component={MainContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
