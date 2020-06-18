import Geocode from "react-geocode";
import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import GoogleMaps from './GoogleMaps'
import { FaTruckLoading } from "react-icons/fa";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyDia4BOenH6l3n4miYNFf6sIfIPl0DcXIo");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("us");

// Enable or disable logs. Its optional.
Geocode.enableDebug();
 
// class LatLng extends Component{
const LatLng = ({companies,selectedState})=>{

   const [address,setAddress] = useState([])

  const getLatLng = () => {
  
    setAddress([])
console.log(companies)
      companies.map((comp) => {
        const address = comp.address_line + ", " + comp.city + ", " + comp.state
        Geocode.fromAddress(address).then(
          response => {
            const { lat, lng } = response.results[0].geometry.location;
         
            setAddress(prevState=>{
              return [...prevState, {lat:lat, lng:lng, id:comp.id}]
          })
          // console.log("I get the address", lng,lat)
          // console.log("I set the address", address.length,address.id,address.lng,address.lat)
          },
          error => {
            console.error("I am error!!!!!!" + error);
          }
        )
      }
     
      )
     
   
    }

    // when the [] update, run getLatLng
  useEffect(getLatLng,[companies] )

    const choseState=()=>{
        
      let choice = {}

      
         if(selectedState === "WA"){
          choice = {"lat":47.578240,"lng":-122.329450, "zoom":11}
        }else if(selectedState==="OR"){
          choice = {"lat":45.535080,"lng":-122.648880, "zoom":11}
        }
        else{
          choice = {"lat":46.603230,"lng":-121.330276, "zoom":7.2}
        }

        return choice

    }
    // debugger
    return (
  
      <div>
      
        <GoogleMaps address={address} companies={companies} mapCenter ={choseState()} />

      </div>
      
      )
   
}


const mapStateToProps = (state) => {
  return {
    companies: state.company.display,
    selectedState: state.company.choseState
  }
}
export default connect(mapStateToProps)(LatLng);



