
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ProjectShow from './ProjectShow'

class Project extends Component {
    commaNumber = require('comma-number')
    
    render() {
        return (
            <div>
                <Link to={`/projects/${this.props.project.id}`} id={this.props.project.id} currentUser={this.props.currentUser}>
                    <div className="project">
                        <h1>{this.props.project.developer_name}</h1>
                        <h2>Location: {this.props.project.location}</h2>
                        <h3>Total Capital Needed: ${this.commaNumber(this.props.project.total_capital_needed)}</h3>
                        <h4>Minimum Investment: ${this.commaNumber(this.props.project.minimum_investment)}</h4>
                        <h4>Projected ROI: {this.props.project.projected_roi}</h4>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Project
