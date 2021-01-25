
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class NavBar extends Component {
    
    localLogout = () => {
        // console.log(this.props)
        this.props.logout()
    
    }
    
    render() {
        return (
            <nav id="nav">
                {this.props.currentUser ? 
                    <NavLink to={`/users/${this.props.currentUser.id}`}>
                        <span>Hello {this.props.currentUser.username}</span>
                    </NavLink>
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
