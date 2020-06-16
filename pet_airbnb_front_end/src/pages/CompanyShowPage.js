import React from 'react'
import { connect } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";      
import CommentCard from '../components/company/CommentCard.js'
import ScheduleForm from '../components/schedule/ScheduleForm.js'
import {FaStar} from 'react-icons/fa'

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

    const getEachSerRating = (id)=>{
        let serCstHash = {}

       let compSches =  props.allSchedules.filter(sch=>sch.companyservice.company_id == props.match.params.id)
       compSches.map(sch=>{
      
        let k = "id" + sch.companyservice.id

           if(!serCstHash[k]){
            serCstHash[k]=[sch.rating]
        }else{
            serCstHash[k].push(sch.rating)
        }
             
        })

       for( let k in serCstHash){
           if(k.slice(2)==id){
            return serCstHash[k].reduce((a,b)=>a+b,0)/serCstHash[k].length + "("+ serCstHash[k].length +")"
           }
       }
       
    }

   
        //   if(getCompany()==null){
        //   return <h1>loading...</h1>
    //   }else{
    const { company_name,address_line,city,state,zip,services,picture1,picture2,picture3,description} =  getCompany()
       
const listOfServices=()=>services.map((ser,index)=><li key = {index}>{ser.service}: $ {ser.charge} 

{getEachSerRating(ser.companyservices_id)?
            <>
             <FaStar color={"#ffc107"}/> 
             {getEachSerRating(ser.companyservices_id)}
             </>
             
             :""}

</li>)
    
    const getScheduleForm = ()=><ScheduleForm services={services} company = {getCompany()}/>
        return (
           
            <div className="CompanyShowPage">
                 <div className="CompanyName">
               
                    <h1>{company_name}</h1>
                 </div>
                 <div className="Address">
                    <p>{address_line+", "+city + ", " + state+" "+zip}</p>
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
                 <div className = "Services">
                     Services:
                    <ul>
                        {listOfServices()}
                    </ul>
                 </div>
                 <div className="Description">
                    Description: <p>{description}</p>
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