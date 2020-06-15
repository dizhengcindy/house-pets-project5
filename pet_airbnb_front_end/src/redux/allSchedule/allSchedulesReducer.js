import {
  FETCH_ALLSCHEDULES_REQUEST,
  FETCH_ALLSCHEDULES_SUCCESS,
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
     
      default:
        return state;
    }
  };
  
  export default allScheduleReducer;
  