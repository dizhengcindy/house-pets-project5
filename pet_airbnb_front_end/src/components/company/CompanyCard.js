import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import {FaStar} from 'react-icons/fa'
import {getAvgRating} from '../../redux'
import Image from 'react-bootstrap/Image'
import {GrFormNext,GrFormPrevious} from 'react-icons/gr'

const CompanyCard=(props)=>{

    const {id,company_name,address_line,city,state,country,zip,picture1,picture2,picture3,services}= props.company
   
    const [pics,setPics] = useState([picture2,picture3,picture1])
    const [showPic, setShowPic] = useState(picture1)

    const [count,setCount] = useState(0)
    const [avg,setAvg] = useState(0)

   useEffect ( ()=>{
       let total = 0
       let num = 0

       let compSches =  props.allSchedules.filter(sch=>sch.companyservice.company_id == props.company.id)
       
       compSches.map(sch=>{
        if(sch.rating){
            total += sch.rating
            num+=1
        }
        })
       
        if(num!==0){
            props.getAvgRating({company_id:props.company.id, avg:total/num, count:num})
            setCount(num)
            let roundedAvg = Math.round(total/num*100)/100
            setAvg(roundedAvg)
        }

        
    })

   const populateServices=(services)=>services.map((service,index)=>
        <li key={index} className={service.service==props.choseService?"Dark":"Light"}>
            {service.service} ${service.charge}
           
        </li>
   )

  
   const previous=()=>{
    setShowPic(...pics.slice(0,1))
    let newPics = [...pics.slice(1),...pics.slice(0,1)]
     setPics(newPics)
   }

   const next=()=>{
    setShowPic(...pics.slice(1,2))
    let newPics = [...pics.slice(2),...pics.slice(0,2)]
     setPics(newPics)
   }
   
    return (
        <div className="CompanyCard">
            {/* <div className="Previous">
            <GrFormPrevious onClick={previous}/>
            </div> */}
            <div className="image" >

            <Image src={picture1}  rounded />

            {/* <GrFormNext onClick={next}/> */}
   
            {/* <img src={picture1} /> */}
            </div>



            <div className="TextContent">
            <div className="name">
                <Link to={`/companies/${id}` }>

                   <div style={{color:"#2676c9"}}>
                        <strong>{company_name+"  "}</strong>
                        </div>
                    </Link>

                    {/* {getAverageRating()} */}
                        {count!==0?
                        <><FaStar color={"#ffc107"}/> {avg}({count} )</>:""}
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
      allSchedules: state.allSchedules.data,
      choseService: state.company.choseService
    }
  }

  const mapDispatchToProps = dispatch=>{
      return{
        getAvgRating: (data)=>dispatch(getAvgRating(data))
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(CompanyCard)