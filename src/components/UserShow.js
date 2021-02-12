
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import UserPieChart from './UserPieChart'
import UserReChart from './UserReChart'
import dateFormat from 'dateformat'

class UserShow extends Component {
    
    state = {
        user: null,
        investments: [],
        projects: null //serializer for userProjects with breakdown by position of each project
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/${this.props.match.params.id}`)
        .then(response => {
            return response.json()
        })
        .then(data => this.setState({user: data, investments: data.investments}))
    }

    totalPosition() {
        let total = 0
        if (this.state.user) {
            let investments = this.state.investments
            investments.forEach(element => {
                total += element.amount
            });
        }
        return total
    }

    userInvestments = () => {
        let sortedInvestments = this.state.investments.sort((a, b) => b.id - a.id)
        
        return sortedInvestments.map(inv => 
                <li>
                    {" " + dateFormat(inv.date, "mmmm dS, yyyy") + " - " } 
                    <Link to={`/projects/${inv.project.id}`}>{" " + inv.project.developer_name + " "}</Link> 
                     ${this.commaNumber(inv.amount) + " "}
                    {this.props.currentUser.id === inv.user_id ?
                        <button onClick={this.onDelete} value={inv.id}>Delete Investment</button>
                        : null
                    }
                    {/* <button onClick={this.onDelete} value={inv.id}>Delete Investment</button> */}
                </li>
            )
    }

    onDelete = (e) => {  
        let id = e.target.value
        let newInvestments = this.state.investments.filter(inv => inv.id !== id)
        this.setState({investments: newInvestments})

        fetch(`http://localhost:3000/investments/${id}`, {
            method: "DELETE",
        })
    }

    commaNumber = require('comma-number')
    
    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.user ?
                    <div className="userShow" style={{color: "white"}}>
                        <div className="userHeader">
                            <h1>User: {this.state.user.username}</h1>
                            <h2>Total Position: ${this.commaNumber(this.totalPosition())}</h2>
                        </div>
                        <div className="userCharts">
                            {/* <UserPieChart investments={this.state.investments}/> */}
                            <UserReChart investments={this.state.investments}/>
                        </div>
                        <ul className="userInvestments">
                            {this.userInvestments()}
                        </ul>
                    </div> 

                : <h1>Loading ...</h1> }

            </div>
        )
    }
}

export default  UserShow
