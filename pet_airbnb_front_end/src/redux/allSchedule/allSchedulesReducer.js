import {
  FETCH_ALLSCHEDULES_REQUEST,
  FETCH_ALLSCHEDULES_SUCCESS,
  UPDATE_ALLSCHEDULES_COMMENT,
  } from "./allSchedulesTypes";
  
  const initialState = {
    data: [],
    loading: false,
  };
  
  const allScheduleReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALLSCHEDULES_REQUEST:
       
        return {
          ...state,
          loading: true,
        };
      case FETCH_ALLSCHEDULES_SUCCESS:
      
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
     case UPDATE_ALLSCHEDULES_COMMENT:
   
      let newSch = state.data.find(sche=>sche.id===action.payload.id)
      newSch.comment = action.payload.comment
      newSch.rating = action.payload.rating
// console.log(newSch)
// debugger
        return{
          ...state,
          data: [...state.data.filter(sche=>sche.id!==action.payload.id),newSch]
        }
      default:
        return state;
    }
  };
  
  export default allScheduleReducer;
  