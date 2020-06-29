import React , { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import{cancelSchedule,updateSchedule,updateAllSchedulesComment} from '../../redux'
import {FaStar} from 'react-icons/fa'
import Button from  'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import {AiOutlineClose} from 'react-icons/ai'

const ScheduleCard=({schedule,services, companies,cancelSchedule,updateSchedule,updateAllSchedulesComment,changeShow})=> {
    const [show, setShow] = useState(false)

    const [commentBox, setCommentBox] = useState(false)
    const [submitComment, setSubmitComment] = useState(false)
 
    const [comment,setComment] = useState(null)

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    const startTime = schedule.start_time.split("T")[1].slice(0,5)
    const endTime = schedule.end_time.split("T")[1].slice(0,5)


    const findCompany=()=>companies.find(comp=>comp.id===schedule.companyservice.company_id)
    const findService=()=>services.find(ser=>ser.id===schedule.companyservice.service_id)

    const handleChange=event=>{
        setComment(event.target.value)
    }

    const handleSubmitComment=event=>{
        event.preventDefault()
        updateSchedule(schedule.id,
            {comment:comment,
            rating: rating})
            updateAllSchedulesComment({id:schedule.id,comment:comment, rating: rating})
        setSubmitComment(true)
    
    }

    const handleDeleteComment = ()=>{
        updateSchedule(schedule.id, {comment:null,rating: null})
        updateAllSchedulesComment({id:schedule.id,comment:null,rating: null})
        setCommentBox(false)
        setSubmitComment(false)
         setShow(true)
    }

    const cancelSch = ()=>{
        cancelSchedule(schedule.id)
        changeShow()
    }
return (
        <div className = "Schedule">
             
            <div className="Text">
            
            <h6><strong>
            Company: 
            <Link to={`/companies/${findCompany().id}` }>
              {findCompany().company_name}
                </Link>
                </strong></h6>
            <div>Location: {findCompany().address_line+", "+findCompany().city + ", "+findCompany().state + findCompany().zip}</div>
            <div>Scheduled date: {schedule.start_date} {startTime} -- {schedule.end_date} {endTime}</div>

            <div>Service: {findService().service_type}</div>
            <div>Number of pets:{schedule.num_of_pets} </div>
            <div>Total cost: $ {schedule.totalCost}</div>
            </div>
        <div className="CommentOnSchedule">
        <>
      <Alert show={show} variant="success">
        <Alert.Heading> You deleted the review successfully!</Alert.Heading>
        {/* <hr /> */}
        <div className="d-flex justify-content-end">
          <Button variant="outline-info" onClick={() => setShow(false)} variant="outline-success">
          <AiOutlineClose/>
          </Button>
        </div>
      </Alert>

      
    </>
            {schedule.rating?
             <div>Rating: {[...Array(5)].map((star, i) =><FaStar key={i} className="star" color = {i< schedule.rating?"#ffc107":"#e4e5e9"} /> )}
                </div> 
                : ""}

            
            {schedule.comment? 
            <div>Comment: {schedule.comment}</div> 
            :""}
            {(schedule.rating==null && schedule.comment==null)? "":
            <Button variant="outline-info" onClick={handleDeleteComment}>Delete Review</Button>}

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

                        <Form onSubmit={handleSubmitComment}>
                        <Form.Group controlId="formBasicText">
                            <Form.Control 
                            type="comment" 
                            name="comment"  
                            // value={comment} 
                            placeholder="Enter comment"  
                            onChange={handleChange} />
                        </Form.Group>

                        <Button variant="outline-info" name="comment" type="submit">
                            Submit
                        </Button>
                        </Form>

                        {/* <form onSubmit={handleSubmitComment}>
                        <input type="text" name="comment" />
                        <input type="submit"/>
                        </form> */}

                        </>}
                </>
                :
                <>
                    {(schedule.rating==null && schedule.comment==null)? <Button variant="outline-info" onClick={()=>{setCommentBox(!commentBox)}}>Review service</Button>:""}
            
                </>
                }
           </>
           :
            <>
                <Button variant="outline-info" onClick={()=>{updateSchedule(schedule.id,{done:true})}}>Done</Button>
                <Button variant="outline-info" onClick={cancelSch}>Cancel</Button>
            </>}
            </div>
          
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
        updateSchedule: (id,data)=>dispatch(updateSchedule(id,data)),
        updateAllSchedulesComment:(data)=>dispatch(updateAllSchedulesComment(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ScheduleCard)