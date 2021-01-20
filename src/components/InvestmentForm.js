
import React, { Component } from 'react'
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

class InvestmentForm extends Component {
    
    state = {
       amount: ""
    }
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    //eventually need automatic rendering withou refresh
    submitHandler = (e) => {
        e.preventDefault()
        
        if (this.state.amount >= this.props.project.minimum_investment) {

            fetch('http://localhost:3000/investments', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    date: new Date(),
                    amount: this.state.amount,
                    user_id: this.props.currentUser.id, //currently hardcoded
                    project_id: this.props.project.id
                })
            })
            .then(response => {
                return response.json()
            })
            .then(investmentObj => this.props.addInvestment(investmentObj))
        
        } else {
            window.alert(`Minimum investment is ${this.props.project.minimum_investment}`)
        }
    }
    
    
    render() {
        // console.log(this.props) 
        return (
            <div onSubmit={this.submitHandler}>
                {/* <Popup trigger={<div className="btn-div"><button > Invest </button></div>} position="center"> */}
                    <form >
                        $
                        <input type="text" name="amount" value={this.state.amount} onChange={this.onChange}/>

                        <button>Submit</button>
                    </form>
                {/* </Popup> */}
            </div>
        )
    }
}

export default InvestmentForm
