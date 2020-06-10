import React, { Component } from "react";
// import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { authUser } from "../redux";

const INITIAL_STATE ={
    
    username:"",
    password:""
    
}

class Login extends Component {
    state = INITIAL_STATE;

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onAddUser(this.state);
      this.setState(INITIAL_STATE);
    };
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    };
    render() {
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="label-class" htmlFor="studentName">
              Name:
            </label>

            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="please enter a name"
            />
          </div>
    
          <div className="form-group">
            <label className="label-class" htmlFor="password">
            Password:
            </label>

            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="please enter password"
            />
          </div>
          <div className="form-group">
            <button type="submit" variant="danger">
              Login
            </button>
          </div>
        </form>
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
export default connect(null,mapDispatchToProps)(Login)