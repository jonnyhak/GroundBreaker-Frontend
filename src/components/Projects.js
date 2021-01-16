
import React, { Component } from 'react'
import Project from './Project'

class Projects extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>Project List</p>
                {
                    this.props.projects.map((project) => (
                        < Project 
                            key={project.id}
                            project={project}   
                        />
                        
                    ))
                }
            </div>
        )
    }
}

export default Projects
