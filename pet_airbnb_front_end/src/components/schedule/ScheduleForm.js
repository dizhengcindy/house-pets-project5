import React, { useState} from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";      
import { postSchedule } from '../../redux';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { useAlert } from 'react-alert'

 const ScheduleForm=(props)=>{

    const alert = useAlert()
    const [companyserviceId, setCompanyserviceId]=useState()
    const [numOfPets, setNumOfPets]=useState(1)
    const [startDate, setStartDate]=useState( setHours(setMinutes(new Date(), 30), 7))
    const [endDate, setEndDate]=useState(setHours(setMinutes(new Date(), 30), 7))

   const populateServices=(services)=> services.map((ser,index)=><option key={index} id={ser.id}>{ser.service + " $ " + ser.charge} </option>)
    
   const handelChangeService=(event)=>{
       const{services} = props.company
       let service =  event.target.value.split(" $ ")[0]
       let id = services.find(ser=>ser.service===service).id
       
       setCompanyserviceId(id)
       
    }

   const handleClick=()=>{
   
        props.addSchedule({
        user_id: props.user.id,
        companyservice_id:companyserviceId,
        num_of_pets:numOfPets,
        start_date:startDate,
        start_time:startDate.getHours()+ ":" +startDate.getMinutes(),
        end_date:endDate,
        end_time:endDate.getHours()+ ":" +endDate.getMinutes()
    })
    alert.success('You reserved the service successfully!')
    }
    return (
        <div className = "ScheduleForm">
           
                 <label>Service:</label>
                  <select id="service" onChange={handelChangeService}>
                      <option>Choose a service...</option>
                     {populateServices(props.services)}
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
    )
}
const mapStateToProps = (state) => {
    return{
      user:state.user.data.user
    }
  }
const mapDispatchToProps = dispatch=>{
    return{
        addSchedule: (data)=>postSchedule(data)(dispatch)
    }
} 
  export default connect(mapStateToProps,mapDispatchToProps)(ScheduleForm);