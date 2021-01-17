
import React, { Component } from 'react'
import Project from './Project'
import SearchForm from './SearchForm'

class Projects extends Component {
    
    state = {
        searchByLocation: ""
    }
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    allProjects = () => {
        let filteredProjects
        if (this.state.searchByLocation !== "") {
            filteredProjects = this.props.projects.filter((project) => 
                project.location.toLowerCase().includes(this.state.searchByLocation.toLowerCase())
            )
        } else {
            filteredProjects = this.props.projects
        }
        return filteredProjects
    }
    
    render() {
        console.log(this.allProjects())
        return (
            <div>
                <p>Project List</p>
                <SearchForm 
                    searchByLocation={this.state.searchByLocation}
                    changeHandler={this.onChange}
                />
                {
                    this.allProjects().map((project) => (
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
