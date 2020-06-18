import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateUser} from '../redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Alert from 'react-bootstrap/Alert'
import {AiOutlineClose} from 'react-icons/ai'

class UserProfile extends Component {
  
   
    state = {
            username: this.props.user.username,
            email: this.props.user.email,
            show:false
    }
    changeShow=()=>{
        this.setState({
            show:false
        })
    }
     
    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value
         })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.updateUser(this.props.user.id,this.state)
        this.setState({
            show:true
        })
        // this.props.history.push("/")
    }
    render() {
        const { username, email} = this.state
        return (
            
               
                     <Container>
             <div className="UserProfile">
             <h1>Your Profile</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="username" placeholder="Enter username"
                         name="username"
                         value={username}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                    Update Profile
                    </Button>
                
                </Form>

                <>
      <Alert show={this.state.show} variant="success">
        <Alert.Heading> You updated your profile successfully!</Alert.Heading>
        <div className="d-flex justify-content-end">
          <Button onClick={this.changeShow} variant="outline-success">
          <AiOutlineClose/>
          </Button>
        </div>
      </Alert>

      
    </>
              
            </div>
            </Container>
            //     <h1>Your Profile</h1>
            //     <form onSubmit={this.handleSubmit}>
            //         <div className="ui field">
            //             <label>Username</label><br/>
            //             <input
            //                 name="username"
            //                 placeholder="Enter username"
            //                 value={username}
            //                 onChange={this.handleChange}
            //             />
            //         </div>
            //         <div className="ui field">
            //             <label>Email</label><br/>
            //             <input
            //                 type="email"
            //                 name="email"
            //                 placeholder="Enter email"
            //                 value={email}
            //                 onChange={this.handleChange}
            //             />
            //         </div>
            //         <div className="form button">
            //             <button type="submit">
            //                 Update Profile
            //             </button>
            //         </div>
            //     </form>
            // </div>
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