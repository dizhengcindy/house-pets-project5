import React from 'react'
import { Link } from "react-router-dom";

const CompanyCard=(props)=>{

   const populateServices=(services)=>services.map((service,index)=>
        <li key={index}>
            {service.service} ${service.charge}
        </li>
   )

    const {id,company_name,adddress_line,city,state,country,zip,picture1,picture2,picture3,services}= props.company
    return (
        <div className="CompanyCard">
            <div className="image">
            <img src={picture1} />
            </div>
            <div className="TextContent">
                <Link to={`/companies/${id}`}>
                    <div className="name">
                        <strong>{company_name}</strong>
                    </div>
                    </Link>
                    <div className="address">
                       Address: {adddress_line+", " + city+ ", "+state+" "+ zip}
                    </div>
                    <div className="services">
                        
                        {populateServices(services)}
                        
                    </div>
                </div>
        </div>
    )
}
export default CompanyCard