
import React, { Component } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class NavBar extends Component {
    
    localLogout = () => {
        // console.log(this.props)
        this.props.logout()
    
    }

    // localOnClick = () => {
    //     this.props.history.push(`/users/${this.props.currentUser.id}`)
    // }
    
    render() {
        console.log(this.props.history)
        return (
            <nav>
                <span>Nav</span>
                {this.props.currentUser ? 
                    <NavLink to={`/users/${this.props.currentUser.id}`}>
                        <span>Hello {this.props.currentUser.username}</span>
                    </NavLink>
                    // <button onClick={this.localOnClick}>Hello {this.props.currentUser.username}</button>
                : null
                }
                <NavLink to="/">
                    <span>HOME</span>
                </NavLink>
                {this.props.currentUser ? 
                    <>
                        <NavLink to="/"> 
                            <span onClick={this.localLogout}>Log Out</span>
                        </NavLink>
                    </>
                 : 
                    <>
                    <NavLink to={'/signup'}>
                        SIGN UP
                    </NavLink>
                    <NavLink to={'/'}>
                        LOG IN
                    </NavLink>
                    </>
                }

            </nav>
        )
    }
}

export default NavBar 
