
import React, { Component } from 'react'

class UserShow extends Component {
    
    state = {
        user: null,
        investClicked: false,
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
        return this.state.investments.map(inv => 
                <li>
                    {inv.date} Amount: {inv.amount}
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
                        {this.userInvestments()}
                    </div> 

                : <h1>Loading ...</h1> }

            </div>
        )
    }
}

export default  UserShow
