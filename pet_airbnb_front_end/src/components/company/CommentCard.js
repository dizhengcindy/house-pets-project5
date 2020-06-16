import React from 'react'
import { connect } from 'react-redux'
import {FaStar} from 'react-icons/fa'

const CommentCard=({schedule,services })=>{

    const findService=()=>services.find(ser=>ser.id===schedule.companyservice.service_id)
    
    return (
        <div className="CommentCard">
        
           {schedule.user.username}:
           <div>
            {findService().service_type}
            </div>
           {schedule.rating ?
            <div>Rating: {[...Array(5)].map((star, i) =><FaStar key={i} className="star" color = {i< schedule.rating?"#ffc107":"#e4e5e9"} /> )}
            </div>:""}
           
            {schedule.comment ?
            schedule.comment :""}
  
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      services:state.service.data
    }
  }
export default connect(mapStateToProps)(CommentCard)