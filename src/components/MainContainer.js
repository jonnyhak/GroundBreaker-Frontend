
import React, { Component } from 'react'
import Projects from './Projects'

class MainContainer extends Component {
    
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
            <div>

                 <Projects  projects={this.state.projects}/>
                
            </div>
        )
    }
}

export default MainContainer
