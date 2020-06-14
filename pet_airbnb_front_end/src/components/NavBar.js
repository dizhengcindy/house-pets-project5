import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'

class NavBar extends Component{

    signOut = () => {
        // localStorage.removeItem("user_id")
        this.props.logout()
    }

    render(){
        return(
            <div className="navbar">
                <NavLink to="/" exact>Home</NavLink>
                {!!this.props.user ?
                <>
                    <NavLink to="/user/profile" exact>Profile</NavLink>
                    <NavLink to="/schedules" exact>Schedules</NavLink>
                    <NavLink to="/login" exact onClick={this.signOut}>Sign Out</NavLink>
                </>
                :
                <NavLink to="/login" exact>Login</NavLink> }
                
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        user:state.user.data.user
    }
}
const mapDispatchToProps=dispatch=>{
return{
    // clearUserStorage,
    // clearScheduleStorage
    logout: () => dispatch({type:"SIGNOUT_REQUEST"})
}
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)