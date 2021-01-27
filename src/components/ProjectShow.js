
import React, { Component } from 'react'
import {useParams} from 'react-router-dom'
import InvestmentForm from './InvestmentForm'
import { Line, Circle } from 'rc-progress'
import ProjectImageSlider from './ProjectImageSlider'
import {Link} from 'react-router-dom'
import dateFormat from 'dateformat'

class ProjectShow extends React.Component  {
    
    state = {
        project: null,
        investClicked: false,
        investments: []
    }

    
    componentDidMount() {
        fetch(`http://localhost:3000/projects/${this.props.match.params.id}`) //this.routerProps.match.params.id
        .then(response => {
            return response.json()
        })
        .then(data => this.setState({project: data, investments: data.investments}))
        
    }

    capital_raised = () => {
        let total = 0
        if (this.state.project) {
            let investments = this.state.investments
            investments.forEach(element => {
                total += element.amount
            });
        }
        return total
    }

    localClickHandler = () => {
        this.setState({investClicked: !this.state.investClicked})
    }

    projectInvestments = () => {
        let sortedInvestments = this.state.investments.sort((a, b) => b.id - a.id)
        return sortedInvestments.map(inv => 
            <li>           
                {" " + dateFormat(inv.date, "mmmm dS, yyyy") + " - " }  
                {/* <br/> */}
                <Link to={`/users/${inv.user.id}`} key={inv.id}>{" " + inv.user.username + " "}</Link> 
                 {/* <br/> */}
                 invested $ {this.commaNumber(inv.amount) + " "}
                 {/* <br/> */}
                {this.props.currentUser.id === inv.user.id ?
                    <button onClick={this.onDelete} value={inv.id}>Delete Investment</button>
                    : null
                }
            </li>
        )
    }

    onDelete = (e) => {  
        let id = e.target.value
        let newInvestments = this.state.investments.filter(inv => inv.id != id)
        this.setState({investments: newInvestments})

        fetch(`http://localhost:3000/investments/${id}`, {
            method: "DELETE",
        })
    }

    percent = () => {
        let percent 
        percent = (this.capital_raised()) / (this.state.project.total_capital_needed) * 100 
        return percent.toFixed(2).toString()
    }

    addInvestment = (investmentObj) => {
        this.setState({investments: [investmentObj, ...this.state.investments]})
    }

    commaNumber = require('comma-number')

    render() {
        console.log(this.props)

        return (
            <div>
            {this.state.project ?  
            <div className="projectshowgrid">
                <div id="projectimages"> 
                    <div style={{marginLeft: "15vw"}}>
                        <ProjectImageSlider project={this.state.project} style={{marginleft: "10%"}}/>
                    </div>
                    <br/>
                    <div className="percent" style={{overflow: "scroll" }}>
                        <h2>Percent raised: {this.percent()} %</h2>
                        <div style={{margin: "10px"}} >
                            <Line percent={this.percent()} strokeWidth="4" strokeColor="green" trailWidth="4" />
                        </div>
                        <ul classname="projectinvestments">
                            {this.projectInvestments()}
                        </ul>
                    </div>
                </div>
                <div id="projectinfo">
                    <h1>{this.state.project.developer_name}</h1>
                    {/* <br/> */}
                    <h2>Location: {this.state.project.location}</h2>
                    {/* <iframe className="map"  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_KEY}&q=${this.state.project.lat}, ${this.state.project.lng}&zoom=8`}> </iframe> */}
                    {/* <br/> */}
                    <h3>Total SQFT: {this.commaNumber(this.state.project.size)}</h3>
                    <br/>
                    <h3>Total Capital Needed: ${this.commaNumber(this.state.project.total_capital_needed)}</h3>
                    <br/>
                    <h4>Captial Raised: ${this.commaNumber(this.capital_raised())}</h4>
                    <br/>
                    <h4>Minimum Investment: ${this.commaNumber(this.state.project.minimum_investment)}</h4>
                    <br/>
                    <h4>Projected ROI: {this.state.project.projected_roi}</h4>
                    {/* <h5>Investments: {this.state.project.investments.amount}</h5> */}
                    <br/>
                    {this.state.investClicked ?
                        <InvestmentForm project={this.state.project} addInvestment={this.addInvestment} currentUser={this.props.currentUser} /> 
                        : null }
                    <br/>
                    <button onClick={() => this.localClickHandler()} style={{fontSize: "18px"}}>Invest!</button>
                    <br/>
                </div>
                    
            </div>
                : <h1>Loading...</h1>}
            </div>
        )
    }
}

export default ProjectShow
