
import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

class ProjectShow extends React.Component  {
    
    state = {
        project: {}
    }

    
    componentDidMount() {
        fetch(`http://localhost:3000/projects/${this.props.match.params.id}`)
        .then(response => {
            return response.json()
        })
        .then(data => this.setState({project: data}))
    }
        
    render() {
        console.log(this.state)
        return (
            <div>
                {/* this.state.project ? < >  : null */}
                <h1>Project Show</h1>
                <h1>{this.state.project.location}</h1>

              
            </div>
        )
    }
}

export default ProjectShow
