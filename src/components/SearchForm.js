
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
                    {/* <input 
                        type="number" 
                        name="searchByMinInvestment"
                        value={this.props.searchByMinInvestment} 
                        placeholder="search by Min Investment" 
                        onChange={this.props.changeHandler} 
                    /> */}
                    <select
                        name="searchByMinInvestment"
                        onChange={this.props.changeHandler}
                    >
                        <option value="">select budget</option>
                        <option value="100000">$100 K</option>
                        <option value="200000">$200 K</option>
                        <option value="500000">$500 K</option>
                        <option value="1000000">$1 m</option>
                        <option value="2000000">$2 m</option>
                        {/* <option value=""></option> */}
                    </select>

                    <button type="Submit">
                        Clear 
                    </button> 
                    
                </form>
            </div>
        )
    }
}

export default SearchForm
