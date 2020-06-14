import React , { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import{cancelSchedule,updateSchedule} from '../../redux'
const ScheduleCard=({schedule,user,services, companies,cancelSchedule,updateSchedule})=> {

// const [done, setDone] = useState(!!schedule.done)
const [commentBox, setCommentBox] = useState(false)
const startTime = schedule.start_time.split("T")[1].slice(0,5)
const endTime = schedule.end_time.split("T")[1].slice(0,5)

const findCompany=()=>companies.find(comp=>comp.id===schedule.companyservice.company_id)
const findService=()=>services.find(ser=>ser.id===schedule.companyservice.service_id)

const handleSubmitComment=event=>{
    event.preventDefault()
    updateSchedule(schedule.id,
        {comment:event.target.comment.value,
        rating: 3})
   
}
return (
        <div className = "Schedule">
            <p>Scheduled date: {schedule.start_date} {startTime} -- {schedule.end_date} {endTime}</p>
            <p>Service: {findService().service_type}</p>
            <p>
            Company: 
            <Link to={`/companies/${findCompany().id}` }>
              {findCompany().company_name}
                </Link>
                </p>
            <p>Location: {findCompany().adddress_line+", "+findCompany().city + ", "+findCompany().state + findCompany().zip}</p>
           <p></p>
           {!!schedule.done ?
            
          <>
           {commentBox?
            <form onSubmit={handleSubmitComment}>
            <input type="text" name="comment" />
            <input type="submit"/>
            </form>
            :
            <button onClick={()=>{setCommentBox(!commentBox)}}>Review service</button>
        }
           </>
           :
           <>
            <button onClick={()=>{updateSchedule(schedule.id,{done:true})}}>Done</button>
            <button onClick={()=>{cancelSchedule(schedule.id)}}>Cancel</button>
            </>}
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      services:state.service.data,
      companies: state.company.data
    }
  }

const mapDispatchToProps = dispatch=>{
    return{
        cancelSchedule: (scheduleId)=>cancelSchedule(scheduleId)(dispatch),
        updateSchedule: (id,data)=>dispatch(updateSchedule(id,data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ScheduleCard)