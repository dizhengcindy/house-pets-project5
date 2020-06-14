import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateUser} from '../redux'

class UserProfile extends Component {

    state = {
            username: this.props.user.username,
            email: this.props.user.email
    }

     
    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value
         })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.updateUser(this.props.user.id,this.state)
        // this.props.history.push("/")
    }
    render() {
        const { username, email} = this.state
        return (
            
                <div className="ui form">
                <h1>Your User Profile</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui field">
                        <label>Username</label><br/>
                        <input
                            name="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="ui field">
                        <label>Email</label><br/>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form button">
                        <button type="submit">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      user:state.user.data.user
    }
  }

const mapDispatchToProps = dispatch=>{
    return{
        updateUser: (id,userInfo)=> dispatch(updateUser(id,userInfo))
    }
}
  export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);