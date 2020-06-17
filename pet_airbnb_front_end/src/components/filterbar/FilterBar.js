import React, { Component } from 'react';
import { connect } from 'react-redux'
import {filterCompanies} from '../../redux'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

class FilterBar extends Component{

    state={
        state:"All",
        service:"All"
    }
    populateStates=()=>{
        let states={}
        this.props.companies.map((comp)=> states[comp.state]=0)
        return Object.keys(states).map((state,index)=>
        <NavDropdown.Item eventKey={state} key = {index}>{state}</NavDropdown.Item>
        )   
    }

    populateServices=()=>this.props.services.map((service,index)=> <NavDropdown.Item eventKey={service.service_type} key = {index}>{service.service_type}</NavDropdown.Item>)
    
    // <option key={index}>{service.service_type}</option>) 
    
    handelChangeState=eventKey=>{
        this.setState({
            state:eventKey
        }, ()=>{this.props.changeState(this.state)})
    
    }
    handelChangeService=eventKey=>{
        this.setState({
            service:eventKey
        },()=>{this.props.changeState(this.state)})
    
    }
    
    render(){
        return(
            <>
                 {/* <Nav justify variant="tabs" activeKey="1" className="row"> */}
       
                    
                <NavDropdown title={"State: "+this.state.state} id="nav-dropdown" onSelect={this.handelChangeState}>
                <NavDropdown.Item eventKey={"All"} key = "55">All</NavDropdown.Item>
                {this.populateStates()}
                    </NavDropdown>
          
                        
                <NavDropdown title={"Service: "+this.state.service} id="nav-dropdown" onSelect={this.handelChangeService}>
                <NavDropdown.Item eventKey={"All"} key = "56">All</NavDropdown.Item>
                {this.populateServices()}
                    </NavDropdown>
               
          
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return{
      companies:state.company.data,
      services:state.service.data
    }
  }
const mapDispatchToProps = dispatch=>{
    return{
        changeState: (obj)=>dispatch(filterCompanies(obj))
   
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterBar);