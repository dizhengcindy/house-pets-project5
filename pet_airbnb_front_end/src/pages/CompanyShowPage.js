import React, { Component } from 'react'
import { connect } from 'react-redux'

 class CompanyShowPage extends Component {
    state={
        companyservice_id:"",
        numOfPet:1,
        start_date:"",
        start_time:"",
        end_date:"",
        end_time:""
    }
    getCompany=()=>{
        const id= this.props.match.params.id
        // console.log(id)
        let found = this.props.companies.find(comp=>comp.id==id)
     
       return found
    }

    populateServices=(services)=> services.map((ser,index)=><option key={index} id={ser.id}>{ser.service + " $ " + ser.charge} </option>)
    
    handelChangeService=(event)=>{
       const{services} = this.getCompany()
       let service =  event.target.value.split(" $ ")[0]
       let id = services.find(ser=>ser.service===service).id
       this.setState({
        companyservice_id:id
       })
    }

    handleNumOfPet = event=>{
        this.setState({
            numOfPet:event.target.value
        })
    }
    render() {
       const { company_name,adddress_line,city,state,zip,
        companyservices,services,picture1,picture2,picture3} =  this.getCompany()
        return (
            <div className="CompanyShowPage">
                <div className="CompanyName">
                   <h1>{company_name}</h1>
                </div>
                <div className="Address">
                   <h1>{adddress_line+", "+city + ", " + state+" "+zip}</h1>
                </div>
                <div className="image">
                    <img src= {picture1}/>
                    <img src= {picture2}/>
                    <img src= {picture3}/>
                </div>
                <div>
                <label>Service:</label>
                 <select id="service" onChange={this.handelChangeService}>
                     <option>Choose a service...</option>
                    {this.populateServices(services)}
                </select>
                <div className="NumOfPet">
                    <label>Number of pets</label>
                    <input type="number" min="0" step="1" value={this.state.numOfPet} onChange={this.handleNumOfPet}/>
                </div>
                </div>

                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
      companies:state.company.display
    }
  }
  export default connect(mapStateToProps)(CompanyShowPage);