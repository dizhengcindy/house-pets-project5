import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";      
import { postSchedule, setCompanyId } from '../redux';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

  const CompanyShowPage =(props)=> {

    const [companyserviceId, setCompanyserviceId]=useState()
    const [numOfPets, setNumOfPets]=useState(1)
    const [startDate, setStartDate]=useState( setHours(setMinutes(new Date(), 30), 7))
    const [endDate, setEndDate]=useState(setHours(setMinutes(new Date(), 30), 7))
    const [rating,setRating] = useState(3)
    const [comment,setComment] = useState("")  
     
    const getCompany=()=>{
        //  props.fetchCompanies()
        let id= props.match.params.id
        // props.addCompanyId(id)
        
        // console.log(id,props,id)
        let found = props.companies.find(comp=>comp.id==id)
        // if( found ===undefined){
        //     return null
        // }else{
            return found
        // }
    }

   const populateServices=(services)=> services.map((ser,index)=><option key={index} id={ser.id}>{ser.service + " $ " + ser.charge} </option>)
    
   const handelChangeService=(event)=>{
       const{services} = getCompany()
       let service =  event.target.value.split(" $ ")[0]
       let id = services.find(ser=>ser.service===service).id
       
       setCompanyserviceId(id)
       
    }

   const handleClick=()=>{
    //    let a =startDate
        props.addSchedule({
        user_id: props.user.id,
        companyservice_id:companyserviceId,
        num_of_pets:numOfPets,
        start_date:startDate,
        start_time:startDate.getHours()+ ":" +startDate.getMinutes(),
        end_date:endDate,
        end_time:endDate.getHours()+ ":" +endDate.getMinutes()
        // rating:rating,
        // comment:comment
    })
    }
   
    //   if(getCompany()==null){
        //   return <h1>loading...</h1>
    //   }else{
        const { company_name,adddress_line,city,state,zip,services,picture1,picture2,picture3} =  getCompany()
       return (

            <div className="CompanyShowPage">
                 <div className="CompanyName">
                    <h1>{company_name}</h1>
                 </div>
                 <div className="Address">
                    <p>{adddress_line+", "+city + ", " + state+" "+zip}</p>
                 </div>
                 <div className="image">
                 <div className="row">
                     <div className="column">
                     <img src= {picture1}/>
                     </div>
                     <div className="column">
                     <img src= {picture2}/></div>
                     <div className="column">
                     <img src= {picture3}/></div>
                     </div>
                 </div>
                 <div>
                 <label>Service:</label>
                  <select id="service" onChange={handelChangeService}>
                      <option>Choose a service...</option>
                     {populateServices(services)}
                 </select>
                 <div className="NumOfPet">
                     <label>Number of pets</label>
                     <input type="number" min="0" step="1" value={numOfPets} onChange={(event)=>setNumOfPets(event.target.value)}/>
                 </div>
                Start Date and Time:
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    showTimeSelect
                    minTime={setHours(setMinutes(new Date(), 0), 7)}
                    maxTime={setHours(setMinutes(new Date(), 30), 20)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    startDate={startDate}
                    endDate={endDate}
                />
                End Date and Time:
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    showTimeSelect
                    selectsEnd
                    minTime={setHours(setMinutes(new Date(), 0), 7)}
                    maxTime={setHours(setMinutes(new Date(), 30), 20)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
                <br/>
                <button onClick={handleClick}>Reserve service</button>
                </div>
            </div>
        )}
    // }

const mapStateToProps = (state) => {
    return{
      companies:state.company.display,
      user:state.user.data.user
    }
  }
const mapDispatchToProps = dispatch=>{
    return{
        addSchedule: (data)=>postSchedule(data)(dispatch),
        addCompanyId: (id)=>dispatch(setCompanyId(id))
    }
} 
  export default connect(mapStateToProps,mapDispatchToProps)(CompanyShowPage);