import React, { Component } from "react";
// import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { authUser } from "../../redux";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const INITIAL_STATE ={
    
    username:"",
    password:""
    
}

class MiniLogin extends Component {
    state = INITIAL_STATE;

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onAddUser(this.state);
      this.setState(INITIAL_STATE);
    //   this.props.history.push('/')
    };
  
    handleChange = (event) => {

      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    render() {
        return (
            <div className="MiniLogin">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username"
                         name="username"
                         value={this.state.username}
                         onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                         name="password"
                         value={this.state.password}
                         onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="outline-info" type="submit">
                        Log in
                    </Button>
                    <Button variant="outline-info" onClick={() => this.props.props.history.push("/signup")}>
                        Sign up
                </Button>
                </Form>

                
              
            </div> 
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAddUser: (userFromState) => authUser(userFromState)(dispatch),
      //   onAddStudent: (studentFromState) =>
      //     dispatch({ type: "ADD_STUDENT", payload: studentFromState }),
      // };
    };
  };
export default connect(null,mapDispatchToProps)(MiniLogin)