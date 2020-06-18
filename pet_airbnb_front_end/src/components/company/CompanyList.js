import React, { Component } from 'react'
import CompanyCard from './CompanyCard'
import { connect } from 'react-redux'
import Sort from './Sort'
class CompanyList extends Component {


  companies=()=>
   
    this.props.companies.map((company, index) => {
     
        return <CompanyCard key={index} company = {company}/>;
      
      });


 

render(){
  return (
    <div className="CompanyList">
      {/* <Sort/> */}
      {this.companies()}
    </div>
  );
  }
};
const mapStateToProps = (state) => {
  return{
    companies:state.company.display
  }
}
export default connect(mapStateToProps)(CompanyList);