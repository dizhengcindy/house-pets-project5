import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateSchedule} from '../redux'
import ScheduleCard from '../components/schedule/ScheduleCard.js'

class UserSchedules extends Component {
    populateSchedules=()=>this.props.schedules.map(sch=><ScheduleCard key={sch.id} schedule={sch} user={this.props.user}/>)
    
    render() {
        return (
            <div>
                {this.populateSchedules()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
      user:state.user.data.user,
      schedules:state.schedule.data
    }
  }

const mapDispatchToProps = dispatch=>{
    return{
         updateSchedule: (info)=> dispatch(updateSchedule(info))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserSchedules);