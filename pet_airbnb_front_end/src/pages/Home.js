import React, {Component} from 'react';
import LatLng from '../components/Googlemap/LatLng'
import CompanyList from '../components/company/CompanyList.js'
import FilterBar from '../components/filterbar/FilterBar'

export default class Home extends Component{
render(){
    return(
        <>
         {/* <FilterBar/> */}
        <LatLng/>  
        <CompanyList/>
        </>
    )
}

}