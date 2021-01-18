
import React, { Component } from 'react'
import {useParams} from 'react-router-dom'
import InvestmentForm from './InvestmentForm'
import { Line, Circle } from 'rc-progress'
import ProjectImageSlider from './ProjectImageSlider'
import SimpleImageSlider from "react-simple-image-slider"

class ProjectShow extends React.Component  {
    
    state = {
        project: null,
        investClicked: false,
        investments: null,
    }

    
    componentDidMount() {
        fetch(`http://localhost:3000/projects/${this.props.match.params.id}`)
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
        return this.state.investments.map(inv => 
                <li>
                    {inv.date} Amount: {inv.amount}
                    <button onClick={this.onDelete} value={inv.id}>Delete Investment</button>
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
        return percent.toString()
    }

    addInvestment = (investmentObj) => {
        this.setState({investments: [investmentObj, ...this.state.investments]})
    }

    render() {
        console.log(this.state)

        return (
            <div>
            {this.state.project ?  
            <div>
                    <h1>Project Show</h1>
                    <ProjectImageSlider project={this.state.project}/>
                    <h1>{this.state.project.developer_name}</h1>
                    <h2>Location: {this.state.project.location}</h2>
                    <Line percent={this.percent()} strokeWidth="4" strokeColor="green" trailWidth="4" />
                    <h3>Total Capital Needed: {this.state.project.total_capital_needed}</h3>
                    <h4>Captial Raised: {this.capital_raised()}</h4>
                    <h4>Minimum Investment: {this.state.project.minimum_investment}</h4>
                    <h4>Projected ROI: {this.state.project.projected_roi}</h4>
                    {/* <h5>Investments: {this.state.project.investments.amount}</h5> */}
                    <button onClick={() => this.localClickHandler()}>Invest!</button>
                    {this.state.investClicked ?
                        <InvestmentForm project={this.state.project} addInvestment={this.addInvestment}/> 
                        : null }
                    <ul>
                        {/* {this.state.project.investments.map(inv => 
                            <>
                                <li>{inv.date} Amount: {inv.amount}
                                <button onClick={this.onDelete} value={inv.id}>Delete Investment</button>
                                </li>
                            </>
                        )} */}
                        {this.projectInvestments()}
                    </ul>
            </div>
                : <h1>Loading...</h1>}
            </div>
        )
    }
}

export default ProjectShow
