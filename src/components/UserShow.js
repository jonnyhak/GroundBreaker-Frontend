
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import UserPieChart from './UserPieChart'

class UserShow extends Component {
    
    state = {
        user: null,
        investments: null,
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
                    {inv.date} 
                    <Link to={`/projects/${inv.project.id}`}>{inv.project.developer_name}</Link> 
                    Amount: ${inv.amount}
                    {/* <button onClick={this.onDelete} value={inv.id}>Delete Investment</button> */}
                </li>
            )
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.user ?
                    <div>
                        <h1>User Show</h1>
                        <h1>User: {this.state.user.username}</h1>
                        <h2>Total Position: {this.totalPosition()}</h2>
                        <UserPieChart investments={this.state.investments}/>
                        {this.userInvestments()}
                    </div> 

                : <h1>Loading ...</h1> }

            </div>
        )
    }
}

export default  UserShow
