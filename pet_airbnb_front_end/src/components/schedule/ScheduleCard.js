import React , { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import{cancelSchedule,updateSchedule} from '../../redux'
import {FaStar} from 'react-icons/fa'

const ScheduleCard=({schedule,services, companies,cancelSchedule,updateSchedule})=> {

    const [commentBox, setCommentBox] = useState(false)
    const [submitComment, setSubmitComment] = useState(false)
 
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const startTime = schedule.start_time.split("T")[1].slice(0,5)
    const endTime = schedule.end_time.split("T")[1].slice(0,5)

    const findCompany=()=>companies.find(comp=>comp.id===schedule.companyservice.company_id)
    const findService=()=>services.find(ser=>ser.id===schedule.companyservice.service_id)

    const handleSubmitComment=event=>{
        event.preventDefault()
        updateSchedule(schedule.id,
            {comment:event.target.comment.value,
            rating: rating})
        setSubmitComment(true)
    
    }

    const handleDeleteComment = ()=>{
        updateSchedule(schedule.id, {comment:null,rating: null})
        setCommentBox(false)
        setSubmitComment(false)
        
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
            <p>Location: {findCompany().address_line+", "+findCompany().city + ", "+findCompany().state + findCompany().zip}</p>
            <p>Total cost: $ {schedule.totalCost}</p>
                
            {schedule.rating?
             <p>Rating: {[...Array(5)].map((star, i) =><FaStar key={i} className="star" color = {i< schedule.rating?"#ffc107":"#e4e5e9"} /> )}
                </p> 
                : ""}

            
            {schedule.comment? 
            <p>Comment: {schedule.comment}</p> 
            :""}
            {(schedule.rating==null && schedule.comment==null)? "":
            <button onClick={handleDeleteComment}>Delete Review</button>}

           {!!schedule.done ?
            
          <>
                {commentBox?
                <>
                    {submitComment? 
                        ""
                        :
                        <>
                        <div>
                            {[...Array(5)].map((star, i) =>{
                                const ratingValue = i+1
                                return (<label key={i+3}>
                                    <input 
                                            key = {i+1}
                                            type="radio" 
                                            name="rating" 
                                            value={ratingValue} 
                                            onClick={()=>setRating(ratingValue)}
                                            
                                    />
                                    <FaStar  
                                            key = {i}
                                            className="star" 
                                            color = {ratingValue <= (hover || rating)? "#ffc107":"#e4e5e9"}
                                            onMouseEnter={()=>setHover(ratingValue)}
                                            onMouseLeave = {()=>setHover(null)}
                                   />
                                    </label>)
                            } )}
                        </div>

                        <form onSubmit={handleSubmitComment}>
                        <input type="text" name="comment" />
                        <input type="submit"/>
                        </form>
                        </>}
                </>
                :
                <>
                    {(schedule.rating==null && schedule.comment==null)? <button onClick={()=>{setCommentBox(!commentBox)}}>Review service</button>:""}
            
                </>
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