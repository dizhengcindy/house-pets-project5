import React, {Component} from 'react';
import LatLng from '../components/Googlemap/LatLng'
import CompanyList from '../components/company/CompanyList.js'
import Sort from '../components/company/Sort'

export default class Home extends Component{
render(){
    return(
        <>
         {/* <FilterBar/> */}
        <LatLng/>  
        {/* <Sort/> */}
        <CompanyList/>
        </>
    )
}

}