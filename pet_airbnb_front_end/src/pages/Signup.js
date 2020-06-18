import React, { Component } from "react";
// import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { postUser } from "../redux";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";

const INITIAL_STATE ={
    
    username:"",
    email:"",
    password:"",
    password_confirmation:""
    
    
}

class Signup extends Component {
    state = INITIAL_STATE;

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onAddUser(this.state);
      this.setState(INITIAL_STATE);
      this.props.history.push('/')
    };
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    render() {
        return (
          <Container>
          <div className="Signup">
          <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Please enter a username"
                         name="username"
                         value={this.state.username}
                         onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control  type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Please enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Please enter password" 
                         name="password"
                         value={this.state.password}
                         onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                         type="password"
                         name="password_confirmation"
                         value={this.state.password_confirmation}
                         onChange={this.handleChange}
                         placeholder="please enter confirm password"
                       />
                    </Form.Group>
                    <Button variant="outline-info" type="submit">
                    Sign up
                    </Button>
                    
                    
                </Form>
                <p>Have an account?</p>
                <Button variant="outline-info" onClick={() => this.props.history.push("/login")}>
                       Log in
                </Button> 
            </div>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAddUser: (userFromState) => postUser(userFromState)(dispatch),
      //   onAddStudent: (studentFromState) =>
      //     dispatch({ type: "ADD_STUDENT", payload: studentFromState }),
      // };
    };
  };
export default connect(null,mapDispatchToProps)(Signup)