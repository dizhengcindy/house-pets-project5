import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";      
import CommentCard from '../components/company/CommentCard.js'
import ScheduleForm from '../components/schedule/ScheduleForm.js'
  const CompanyShowPage =(props)=> {

    const getCompany=()=>{
        let id= props.match.params.id
        let found = props.companies.find(comp=>comp.id==id)
        // if( found ===undefined){
        //     return null
        // }else{
            return found
        // }
    }

    const populateComments=()=>{

       let compSchedules = props.allSchedules.filter(sche=>sche.companyservice.company_id === getCompany().id)
  
       return compSchedules.map((schedule,index)=>{
        if(schedule.comment||schedule.rating){
            return <CommentCard key={index} schedule={schedule}/>
        }

      })
    }
   
        //   if(getCompany()==null){
        //   return <h1>loading...</h1>
    //   }else{
    const { company_name,adddress_line,city,state,zip,services,picture1,picture2,picture3} =  getCompany()
       
    const getScheduleForm = ()=><ScheduleForm services={services} company = {getCompany()}/>
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
                {props.user?
                 getScheduleForm()
                 :""
                 }
                 
                <div className="Comments">
                Rating:
                <p></p>
                Comments:
                {populateComments()}
                
                </div>
            </div>
        )}
    // }

const mapStateToProps = (state) => {
    return{
      companies:state.company.display,
      schedules:state.schedule.data,
      user:state.user.data.user,
      allSchedules: state.allSchedules.data
    }
  }

  export default connect(mapStateToProps)(CompanyShowPage);