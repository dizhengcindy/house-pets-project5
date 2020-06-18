import React from 'react'
import { connect } from 'react-redux'
import{sortCompanies} from '../../redux'
const Sort = (props)=>{
 
    const handleSort = (event) =>{

     let ratingRank = props.display.sort((a, b) => (a.avgRating > b.avgRating) ? 1 : (a.avgRating === b.avgRating) ? ((a.size > b.size) ? 1 : -1) : -1 ).reverse()
        this.props.changeState(ratingRank)
        props.sortCompanies(ratingRank)
    }
    return (
        <div className="Sort">

    <label>Choose a sort: </label>

    <select onChange ={ handleSort}>
   
    <option value="None">None</option>
    <option value="Rating">Rating: High to Low</option>
    <option value="Popular">Popularity: High to Low</option>
    <option value="PriceHL">Price: High to Low</option>
    <option value="PriceLH">Price: Low to High</option>
    </select >

    </div>
    )
}
// const mapStateToProps = (state) => {
//   return{
//     display:state.company.display
//   }
// }

const mapDispatchToProps = dispatch=>{
    return{
        sortCompanies: (data)=>dispatch(sortCompanies(data))
    }}

export default connect(null,mapDispatchToProps)(Sort)