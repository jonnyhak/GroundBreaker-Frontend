
import React, { Component } from 'react'

class SearchForm extends Component {
    
    localOnChange = (e) => {
        this.props.changeHandler(e)
    }

    localOnClear = (e) => {
        e.preventDefault()
        this.props.clearHandler(e)
    }
    
    
    render() {
        // console.log(this.props)
        return (
            <div>
                <h5>Search Form</h5>
                <form onSubmit={this.localOnClear}>
                    <input 
                        type="text" 
                        name="searchByLocation"
                        value={this.props.searchByLocation} 
                        placeholder="search by Location" 
                        onChange={this.props.changeHandler} 
                    />
                    <input 
                        type="text" 
                        name="searchByDevName"
                        value={this.props.searchByDevName} 
                        placeholder="search by Developer" 
                        onChange={this.props.changeHandler} 
                    />
                    <input 
                        type="number" 
                        name="searchByMinInvestment"
                        value={this.props.searchByMinInvestment} 
                        placeholder="search by Min Investment" 
                        onChange={this.props.changeHandler} 
                    />
                    <button type="Submit">
                        Clear 
                    </button> 
                    
                </form>
            </div>
        )
    }
}

export default SearchForm
