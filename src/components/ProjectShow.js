
import React, { Component } from 'react'
import {useParams} from 'react-router-dom'
import InvestmentForm from './InvestmentForm'

class ProjectShow extends React.Component  {
    
    state = {
        project: null,
        investClicked: false
    }

    
    componentDidMount() {
        fetch(`http://localhost:3000/projects/${this.props.match.params.id}`)
        .then(response => {
            return response.json()
        })
        .then(data => this.setState({project: data}))
    }

    capital_raised = () => {
        let total = 0
        if (this.state.project) {
            let investments = this.state.project.investments
            investments.forEach(element => {
                total += element.amount
            });
        }
        return total
    }

    localClickHandler = () => {
        this.setState({investClicked: !this.state.investClicked})
    }

    // projectInvestments = () => {
    //     this.state.project.investments.map(inv => <li>{inv.amount}</li>)
    // }
    onDelete = (e) => {  
        let id = e.target.value
        fetch(`http://localhost:3000/investments/${id}`, {
            method: "DELETE",
        })
        //eventually need auto rendering without refresh

        // .then(response => {
        //     return response.json()
        // })
        // .then(console.log)
    }

        
    render() {
        console.log(this.capital_raised())
        return (
            <div>
            {this.state.project ?  
            <div>
                    <h1>Project Show</h1>
                    <h1>{this.state.project.developer_name}</h1>
                    <h2>Location: {this.state.project.location}</h2>
                    <h3>Total Capital Needed: {this.state.project.total_capital_needed}</h3>
                    <h4>Captial Raised: {this.capital_raised()}</h4>
                    <h4>Minimum Investment: {this.state.project.minimum_investment}</h4>
                    <h4>Projected ROI: {this.state.project.projected_roi}</h4>
                    {/* <h5>Investments: {this.state.project.investments.amount}</h5> */}
                    <button onClick={() => this.localClickHandler()}>Invest!</button>
                    {this.state.investClicked ?
                        <InvestmentForm project={this.state.project} /> 
                        : null }
                    <ul>
                        {this.state.project.investments.map(inv => 
                            <>
                                <li>{inv.date} {inv.amount}
                                <button onClick={this.onDelete} value={inv.id}>Delete Investment</button>
                                </li>
                            </>
                        )}
                    </ul>
            </div>
                : <h1>Loading...</h1>}
            </div>
        )
    }
}

export default ProjectShow
