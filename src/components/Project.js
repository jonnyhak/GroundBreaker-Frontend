
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ProjectShow from './ProjectShow'
import ProjectImageSlider from './ProjectImageSlider'

class Project extends Component {
    commaNumber = require('comma-number')
    
    render() {
        return (
            <div>
                {/* <div style={{width: "30vh", height: "30vh"}}>
                    <ProjectImageSlider project={this.props.project}/>
                </div> */}
                <Link to={`/projects/${this.props.project.id}`} id={this.props.project.id} currentUser={this.props.currentUser}>
                    <div className="project">
                        <div>
                            <img style={{width: "30vh", height: "30vh"}} src={this.props.project.img1}/>
                        </div>
                        <div>
                            <h1>{this.props.project.developer_name}</h1>
                            <h2>Location: {this.props.project.location}</h2>
                            <h3>Total Capital Needed: ${this.commaNumber(this.props.project.total_capital_needed)}</h3>
                            <h4>Minimum Investment: ${this.commaNumber(this.props.project.minimum_investment)}</h4>
                            <h4>Projected ROI: {this.props.project.projected_roi}</h4>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Project
