import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateSchedule} from '../redux'
import ScheduleCard from '../components/schedule/ScheduleCard.js'
import Alert from 'react-bootstrap/Alert'
import {AiOutlineClose} from 'react-icons/ai'
import Button from  'react-bootstrap/Button'
class UserSchedules extends Component {
    state = {
        show:false
        }
    changeShow=()=>{
        this.setState({
            show:true
        })
    }
    changeShowBack=()=>{
        this.setState({
            show:false
        })
    }
    populateSchedules=()=>this.props.schedules.map(sch=><ScheduleCard key={sch.id} schedule={sch} user={this.props.user} changeShow={this.changeShow}/>)
    
    render() {
        return (
            <div className="UserSchedules">
 <Alert show={this.state.show} variant="success">
        <Alert.Heading> You canceled the schedule successfully!</Alert.Heading>
        <div className="d-flex justify-content-end">
          <Button onClick={this.changeShowBack} variant="outline-success">
          <AiOutlineClose/>
          </Button>
        </div>
      </Alert>
                <h1>Schedule history:</h1>
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