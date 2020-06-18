import React from 'react'
import { Link } from "react-router-dom";
import ReactDOMServer from 'react-dom/server'
import {FaStar} from 'react-icons/fa'

 const CompanyInfoBox=({companies, compId})=> {
 
   const findComp =()=>companies.find(comp=>comp.id === compId)

    const {id,company_name,address_line,city,state,country,zip,picture1,picture2,picture3,services} = findComp()
  
    // const renderMarkerContent=()=> {
    //     return ReactDOMServer.renderToString(<Link to={`/companies/${compId}` }>
                
    // <p>{company_name}</p>
       
    //   </Link>)
    // }
  
    const handleClick=()=>{
      console.log("Clicked!!!!!!!")
    }
   
    return (
        <div className="CompanyInfoBox">
            <div className="image" onClick={handleClick}>
        <img src={picture1}/>
            </div>
            <div>
          <strong><a href={`http://localhost:3001/companies/${compId}`}> {company_name}</a></strong> 
          </div>
          {findComp().avgRating?
          <><FaStar color={"#ffc107"}/> {Math.round(findComp().avgRating*100)/100}({findComp().numOfComments} )</>
        :""}
          
          </div>
    )
}


export default CompanyInfoBox;