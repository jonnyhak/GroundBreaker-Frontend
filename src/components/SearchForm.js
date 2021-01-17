
import React, { Component } from 'react'

class SearchForm extends Component {
    
    localOnChange = (e) => {
        this.props.changeHandler(e)
    }
    
    
    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>Search Form</h1>
                <form id="search-frm">
                <input 
                    type="text" 
                    name="searchByLocation"
                    value={this.props.searchByLocation} placeholder="search by Location" 
                    onChange={this.props.changeHandler} 
                />
            </form>
            </div>
        )
    }
}

export default SearchForm
