import React, { Component } from 'react';
import { connect } from 'react-redux'
import {filterCompanies} from '../../redux'

class FilterBar extends Component{

    state={
        state:"All",
        service:"All"
    }
    populateStates=()=>{
        let states={}
        this.props.companies.map((comp)=> states[comp.state]=0)
        return Object.keys(states).map((state,index)=> <option key={index}>{state}</option>)   
    }

    populateServices=()=>this.props.services.map((service,index)=> <option key={index}>{service.service_type}</option>) 
    
    handelChangeState=event=>{
        // console.log(event.target.value)
        this.setState({
            state:event.target.value
        }, ()=>{this.props.changeState(this.state)})
    
    }
    handelChangeService=event=>{
        this.setState({
            service:event.target.value
        },()=>{this.props.changeState(this.state)})
    
    }
    
    render(){
        return(
            <div>
                <div className="State">
                Location: <select id="state" onChange={this.handelChangeState}>
                    <option>All</option>
                    {this.populateStates()}
                </select>
                </div>

                <div className="Service">
                Service: <select id="service" onChange={this.handelChangeService}>
                    <option>All</option>
                    {this.populateServices()}
                </select>
                </div>
            </div>
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