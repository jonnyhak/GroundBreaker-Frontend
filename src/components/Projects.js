
import React, { Component } from 'react'
import Project from './Project'
import SearchForm from './SearchForm'

class Projects extends Component {
    
    state = {
        searchByLocation: "",
        searchByMinInvestment: "",
        searchByDevName: ""
    }
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onClear = () => {
        this.setState({
            searchByLocation: "",
            searchByMinInvestment: "",
            searchByDevName: ""
        })
    }

    allProjects = () => {
        let filteredProjects
        if (this.state.searchByLocation !== "" && this.state.searchByMinInvestment !== "") {
            filteredProjects = this.props.projects.filter((project) => 
                project.location.toLowerCase().includes(this.state.searchByLocation.toLowerCase()) && project.minimum_investment <= this.state.searchByMinInvestment
            )
        } else if (this.state.searchByLocation !== "") {
            filteredProjects = this.props.projects.filter((project) => 
                project.location.toLowerCase().includes(this.state.searchByLocation.toLowerCase())
            )
        } else if (this.state.searchByMinInvestment !== "") {
            filteredProjects = this.props.projects.filter((project) => 
                project.minimum_investment <= this.state.searchByMinInvestment
            )
        } else if (this.state.searchByDevName !== "") {
            filteredProjects = this.props.projects.filter((project) => 
                project.developer_name.toLowerCase().includes(this.state.searchByDevName.toLowerCase())
            )
        } else {
            filteredProjects = this.props.projects
        }
        return filteredProjects
    }
    
    render() {
        // console.log(this.allProjects())
        return (
            <div>
                <h2>Project List</h2>
                <SearchForm 
                    searchByLocation={this.state.searchByLocation}
                    searchByMinInvestment={this.state.searchByMinInvestment}
                    searchByDevName={this.state.searchByDevName}
                    changeHandler={this.onChange}
                    clearHandler={this.onClear}
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
