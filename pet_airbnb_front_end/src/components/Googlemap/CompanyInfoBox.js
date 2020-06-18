import React from 'react'
import { Link } from "react-router-dom";
import ReactDOMServer from 'react-dom/server'
import {FaStar} from 'react-icons/fa'

 const CompanyInfoBox=({companies, compId})=> {
 
   const findComp =()=>companies.find(comp=>comp.id === compId)

    const {id,company_name,address_line,city,state,country,zip,picture1,picture2,picture3,services} = findComp()
  
    const renderMarkerContent=()=> {
        return ReactDOMServer.renderToString(<Link to={`/companies/${compId}` }>
                
    <p>{company_name}</p>
       
      </Link>)
    }
  
   
    return (
        <div className="CompanyInfoBox">
            <div className="image">
        <img src={picture1}/>
            </div>
            <div>
           <a href={`http://localhost:3001/companies/${compId}`}> {company_name}</a>
          </div>
          {findComp().avgRating?
          <><FaStar color={"#ffc107"}/> {findComp().avgRating}({findComp().numOfComments} )</>
        :""}
          
          </div>
    )
}


export default CompanyInfoBox;