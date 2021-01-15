import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Projects from './components/Projects'
import './App.css';

class App extends Component {
  
  state = {
    projects: []
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
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Switch>
          <Route path="/projects" render={() => 
              <Projects projects={this.state.projects}/>
            }
          />

        </Switch>
      </div>
    );
  }
}

export default App;
