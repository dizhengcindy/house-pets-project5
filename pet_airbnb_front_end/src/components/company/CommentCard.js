import React from 'react'
import { connect } from 'react-redux'

const CommentCard=({schedule,services })=>{

    const findService=()=>services.find(ser=>ser.id===schedule.companyservice.service_id)
    
    return (
        <div className="CommentCard">
        
           {schedule.user.username}:
           <div>
            {findService().service_type}
            </div>
           {schedule.rating ?
            <div>Rating: {schedule.rating}</div>:""}
           
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