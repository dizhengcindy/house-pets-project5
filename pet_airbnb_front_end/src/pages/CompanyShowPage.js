import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";      
import { postSchedule, setCompanyId } from '../redux';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import {fetchCompanies} from "./redux"
import {fetchServices} from './redux'

  const CompanyShowPage =(props)=> {

    const [companyserviceId, setCompanyserviceId]=useState()
    const [numOfPets, setNumOfPets]=useState(1)
    const [startDate, setStartDate]=useState( setHours(setMinutes(new Date(), 30), 7))
    const [endDate, setEndDate]=useState(setHours(setMinutes(new Date(), 30), 7))
    const [rating,setRating] = useState(3)
    const [comment,setComment] = useState("")  
 
//    const getCompany=()=>{
    
//         let id= props.match.params.id
//         if(props.compId===0){
//         props.addCompanyId(id)
//         }

//         console.log(props)
//         debugger
//         let found = props.companies.find(comp=>comp.id==id)
     
//        return found
//     }

   
    
    const getCompany=()=>{
        let id= props.match.params.id

        props.addCompanyId(id)
        
        console.log(id,props,id)
        let found = props.companies.find(comp=>comp.id==id)
    
        return found
    }

   const populateServices=(services)=> services.map((ser,index)=><option key={index} id={ser.id}>{ser.service + " $ " + ser.charge} </option>)
    
   const handelChangeService=(event)=>{
       const{services} = this.getCompany()
       let service =  event.target.value.split(" $ ")[0]
       let id = services.find(ser=>ser.service===service).id
       
       setCompanyserviceId(id)
       
    }

   const handleNumOfPet = event=>{
        this.setState({
            num_of_pets:event.target.value
        })
    }
    // getStartDate=date=>{
    //     this.setState({
    //         start_date:date
    //     })
    // }
    // getEndDate=date=>{
    //     this.setState({
    //         end_date:date
    //     })
    // }
   const handleClick=()=>{
        props.addSchedule({
        user_id: localStorage.getItem("user_id"),
        companyservice_id:companyserviceId,
        num_of_pets:numOfPets,
        start_date:startDate,
        start_time:11,
        end_date:endDate,
        end_time:1,
        rating:rating,
        comment:comment
    })
    }
   
       const { company_name,adddress_line,city,state,zip,
        companyservices,services,picture1,picture2,picture3} =  getCompany()
        return (
            <div className="CompanyShowPage">
            {/* //     <div className="CompanyName">
            //        <h1>{company_name}</h1>
            //     </div>
            //     <div className="Address">
            //        <p>{adddress_line+", "+city + ", " + state+" "+zip}</p>
            //     </div>
            //     <div className="image">
            //     <div className="row">
            //         <div className="column">
            //         <img src= {picture1}/>
            //         </div>
            //         <div className="column">
            //         <img src= {picture2}/></div>
            //         <div className="column">
            //         <img src= {picture3}/></div>
            //         </div>
            //     </div>
            //     <div>
            //     <label>Service:</label>
            //      <select id="service" onChange={handelChangeService}>
            //          <option>Choose a service...</option>
            //         {populateServices(services)}
            //     </select>
            //     <div className="NumOfPet">
            //         <label>Number of pets</label>
            //         <input type="number" min="0" step="1" value="1"onChange={handleNumOfPet}/>
            //     </div> */}
                Start Date:
                {/* <DatePicker
                    selected={this.state.start_date}
                    onChange={this.getStartDate}
                    showTimeSelect
                    dateFormat="Pp"
                    selectsStart
                    startDate={this.state.start_date}
                    endDate={this.state.end_date}
                /> */}
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    showTimeSelect
                    // minTime={setHours(setMinutes(new Date(), 0), 7)}
                    // maxTime={setHours(setMinutes(new Date(), 30), 20)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
                End Date:
                {/* <DatePicker
                    selected={this.state.end_date}
                    onChange={this.getEndDate}
                    showTimeSelect
                    dateFormat="Pp"
                    selectsEnd
                    startDate={this.state.start_date}
                    endDate={this.state.end_date}
                    minDate={this.state.start_date}
                /> */}
                {/* <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    showTimeSelect
                    minTime={setHours(setMinutes(new Date(), 0), 7)}
                    maxTime={setHours(setMinutes(new Date(), 30), 20)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                /> */}
                <br/>
                <button onClick={handleClick}>Reserve service</button>
                </div>

                
            // </div>
        )
    }

const mapStateToProps = (state) => {
    return{
      companies:state.company.display,
      compId:state.company.currentCompId
    }
  }
const mapDispatchToProps = dispatch=>{
    return{
        addSchedule: (data)=>postSchedule(data)(dispatch),
        addCompanyId: (id)=>dispatch(setCompanyId(id))

    }
} 
  export default connect(mapStateToProps,mapDispatchToProps)(CompanyShowPage);