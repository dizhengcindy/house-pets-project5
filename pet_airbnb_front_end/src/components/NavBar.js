import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavBar extends Component{

    signOut = () => {
        localStorage.removeItem("user_id")
    }

    render(){
        return(
            <div className="navbar">
                <NavLink to="/login" exact>Login</NavLink>
                <NavLink to="/login" exact onClick={this.signOut}>Sign Out</NavLink> 
                
            </div>
        )
    }
}
