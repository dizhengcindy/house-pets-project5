import React,{useState} from 'react'
import { connect } from 'react-redux'
import {FaStar} from 'react-icons/fa'
import {RiDeleteBinLine} from 'react-icons/ri'
import{updateSchedule} from '../../redux'

const CommentCard=({schedule,services,currentUser, deleteComment,updateAllSchedulesComment})=>{
   const [enter,setEnter] = useState(false)
    const findService=()=>services.find(ser=>ser.id===schedule.companyservice.service_id)

    const handleDeleteComment=()=>{
      deleteComment(schedule.id, {comment:null,rating: null})
       updateAllSchedulesComment({id:schedule.id,comment:null,rating: null})
    }

    
    return (
        <div className="CommentCard">
        <div>
           <strong>{schedule.user.username}</strong>
           </div>
           <div className="Service">
           {findService().service_type}
           </div>
           {schedule.rating ?
            <div>{[...Array(5)].map((star, i) =><FaStar key={i} className="star" color = {i< schedule.rating?"#ffc107":"#e4e5e9"} /> )}
            </div>:""}
            
            {schedule.comment ?
            schedule.comment :""}

            {currentUser? 
            <>
            {
              currentUser.id ===schedule.user.id?
              <div className="RiDeleteBinLine">
               <RiDeleteBinLine onClick={handleDeleteComment} onMouseEnter={()=>{setEnter(true)}} onMouseLeave={()=>{setEnter(false)}}  color = {enter?"#6495ED":"#a9a9a9"} />
              </div>
               
               :""
            }
            </>
            :

            "" 
            }
           <br/>  <br/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      services:state.service.data,
      currentUser: state.user.data.user
    }
  }
  const mapDispatchToProps = dispatch=>{
    return{
        deleteComment: (id,data)=>updateSchedule(id,data)(dispatch),
        // updateAllSchedulesComment: (data)=>dispatch(updateAllSchedulesComment(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentCard)