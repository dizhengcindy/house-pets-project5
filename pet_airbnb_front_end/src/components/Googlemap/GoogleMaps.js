import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react'



export class MapContainer extends Component {
 
//   onMouseoverMarker=(event)=>{
// console.log(event)
//   }
state={}

  onMarkerClick=event=>{
    console.log(event)
  }
    populateMarkers=()=>this.props.address.map((set,index)=>
  
    <Marker 
      key={index}
        id = {set.id}
        name = {set.name}
        onMouseover={this.onMouseoverMarker}
        onClick={this.onMarkerClick}
        position={{lat: set.lat,lng:set.lng}} >

        <InfoWindow
        visible= {true}
        marker = {{lat: set.lat,lng:set.lng}}
        >
          <h1>{set.name}</h1>
        </InfoWindow>
   </Marker>
        )


  render() {
    return (
        <>
      <Map 
      className="Map"
      google={this.props.google} 
      style={{width: '60%', height: '100%', position: 'right'}}
      initialCenter={{
        lat: 47.603230,
        lng: -122.330276
      }}
      zoom={11}>
       
          {this.populateMarkers()}
{/*  
       <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                position={{lat: 47.662410,lng:-122.367150}} /> */}
 
       
      </Map>
      </>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCAljUKqK8yZtp63ixK8XMSZFCheddv82c")
})(MapContainer)