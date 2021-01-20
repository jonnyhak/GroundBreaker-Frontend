
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <h4>Nav</h4>
                <NavLink to="/projects">Projects</NavLink>
            </nav>
        )
    }
}

export default NavBar 
