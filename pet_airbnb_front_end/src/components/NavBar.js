import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import FilterBar from '../components/filterbar/FilterBar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { MdPets } from 'react-icons/md'
import {RiUserHeartLine} from 'react-icons/ri'
import Container from 'react-bootstrap/Container'
class NavBar extends Component{

    signOut = () => {
        // localStorage.removeItem("user_id")
        this.props.logout()
    }

    render(){
        return(
            // <div className="navbar">
            <Container>
             {/* <div className="container"> */}
            <Navbar collapseOnSelect expand="xl" bg="light" variant="light" fixed="top" >

            <Nav className="mr-auto">
                <Nav.Item >
                {/* <NavLink to="/" exact>Home</NavLink> */}
                    <Nav.Link eventKey="1" href="http://localhost:3001/">
                    <MdPets size="25"/>  Pets Home
                    </Nav.Link>
                </Nav.Item>
                <FilterBar/>
         
            </Nav>

            <Nav>
                {!!this.props.user ?
                <NavDropdown title={<RiUserHeartLine size="25"/>} id="nav-dropdown" >
                    <NavDropdown.Item eventKey="4.1" href="http://localhost:3001/user/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2" href="http://localhost:3001/schedules">Schedules</NavDropdown.Item>
                    {/* <NavDropdown.Item eventKey="4.3">Saved stores</NavDropdown.Item> */}
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4" href="http://localhost:3001/" onClick={this.signOut}>Log out</NavDropdown.Item>
                </NavDropdown>
                :
                <Nav.Item>
                    <Nav.Link eventKey="4.5" href="http://localhost:3001/login">
                    <MdPets />  Log in
                    </Nav.Link>
                </Nav.Item>}
         
                </Nav>
        
                
                </Navbar>
               
             {/* </div> */}
              </Container>
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

  {/* <NavLink to="/user/profile" exact>Profile</NavLink>
                    <NavLink to="/schedules" exact>Schedules</NavLink>
                    <NavLink to="/login" exact onClick={this.signOut}>Sign Out</NavLink> */}