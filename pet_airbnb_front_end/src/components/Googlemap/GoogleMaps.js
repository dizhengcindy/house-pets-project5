import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react'
import CompanyInfoBox from './CompanyInfoBox'
import { Link} from 'react-router-dom'
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick=(props, marker, e)=>{
    // console.log(this.state.showingInfoWindow)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
   
  }
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

 
  populateMarkers=()=>this.props.address.map((set,index)=>
  // console.log("Hi, I am marker", set.id,set.lng,set.lat)
    <Marker 
      key={index}
        id = {set.id} //company id
        // onMouseover={this.onMouseoverMarker}
        onClick={this.onMarkerClick}
        position={{lat: set.lat,lng:set.lng}} />
        
        )



  render() {
    console.log(this.props)
    return (
        <div className="mapContainer"
         style={{width: '50%', height: '94%',position:'fixed'}}>
      <Map 
      className="Map"
      google={this.props.google} 
      style={{width: '100%', height: '100%'}}
      onClick={this.onMapClicked}
      center={{
        lat: this.props.mapCenter.lat,
        lng: this.props.mapCenter.lng
      }}
      zoom={this.props.mapCenter.zoom}>

     

          {this.populateMarkers()}
{console.log("Hi I am in google map return",this.props.address.length)}
          
          <InfoWindow
        visible={this.state.showingInfoWindow}
        marker={this.state.activeMarker}
       
        >
          {this.state.showingInfoWindow ?

          // console.log(this.state.showingInfoWindow)
          <>
          {/* <p  onClick={this.handleClickInfoWindow}>Click</p> */}
           <CompanyInfoBox compId={this.state.activeMarker.id} companies={this.props.companies}/>
           </>
        :<p>Hi, there</p>}

        
      </InfoWindow>

      </Map>
      </div>
    );
  }
}
 

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCAljUKqK8yZtp63ixK8XMSZFCheddv82c")
})(MapContainer)