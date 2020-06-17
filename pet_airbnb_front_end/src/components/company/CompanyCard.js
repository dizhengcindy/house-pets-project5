import React from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import {FaStar} from 'react-icons/fa'

const CompanyCard=(props)=>{

    const getEachSerRating = (id)=>{
        let serCstHash = {}

       let compSches =  props.allSchedules.filter(sch=>sch.companyservice.company_id == props.company.id)
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
   const populateServices=(services)=>services.map((service,index)=>
        <li key={index}>
            {service.service} ${service.charge}
            {getEachSerRating(service.companyservices_id)?
            <>
             <FaStar color={"#ffc107"}/> 
             {getEachSerRating(service.companyservices_id)}
             </>
             
             :""}
        </li>
   )
    const {id,company_name,address_line,city,state,country,zip,picture1,picture2,picture3,services}= props.company
    return (
        <div className="CompanyCard">
            <div className="image">
            <img src={picture1} />
            </div>
            <div className="TextContent">
            <div className="name">
                <Link to={`/companies/${id}` }>

                   
                        <strong>{company_name}</strong>
                  
                    </Link>
                      </div>
                    <div className="address">
                       Address: {address_line+", " + city+ ", "+state+" "+ zip}
                    </div>
                    <div className="services">
                        
                        {populateServices(services)}
                        
                    </div>
                </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      allSchedules: state.allSchedules.data
    }
  }
export default connect(mapStateToProps)(CompanyCard)