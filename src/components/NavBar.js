
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
// import {withRouter} from 'react-router-dom'

class NavBar extends Component {
    
    localLogout = () => {
        // console.log(this.props)
        this.props.logout()
    
    }

    //this comment this out later onn
    //remember to include event handlers
    
    render() {
        return (
            <nav id="nav">

                <img src="/GBLogo.jpeg" style={{height: "100px", width: "225px"}} alt=""/>
                                
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
                            <span onClick={this.localLogout}>LOG OUT</span>
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
