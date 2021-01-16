
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
                <h1>{this.state.project.developer_name}</h1>
                <h2>Location: {this.state.project.location}</h2>
                <h3>Total Capital Needed: {this.state.project.total_capital_needed}</h3>
                <h4>Minimum Investment: {this.state.project.minimum_investment}</h4>
                <h4>Projected ROI: {this.state.project.projected_roi}</h4>

              
            </div>
        )
    }
}

export default ProjectShow
