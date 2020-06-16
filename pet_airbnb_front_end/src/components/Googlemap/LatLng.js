import Geocode from "react-geocode";
import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import GoogleMaps from './GoogleMaps'

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
const LatLng = ({companies})=>{

  const [address,setAddress] = useState([])

  const getLatLng = () => {
      companies.map((comp) => {

        const address = comp.address_line + ", " + comp.city + ", " + comp.state

        Geocode.fromAddress(address).then(
          response => {
            const { lat, lng } = response.results[0].geometry.location;
          
            setAddress(prevState=>{
              return [...prevState, {lat:lat, lng:lng, id:comp.id,name:comp.name}]
          })
      
          },
          error => {
            console.error("I am error!!!!!!" + error);
          }
        )
      }
      )
    }

    // when the [] update, run getLatLng
   useEffect(getLatLng, [companies] )

 
    return (
      <div>
        {/* can not put setState in render */}
        {/* {this.getLatLng()} */}
        <GoogleMaps address={address} />
      </div>
    )
}


const mapStateToProps = (state) => {
  return {
    companies: state.company.data
  }
}
export default connect(mapStateToProps)(LatLng);



