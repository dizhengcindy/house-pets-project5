import {
    FETCH_SCHEDULES_REQUEST,
    FETCH_SCHEDULES_SUCCESS,
    POST_SCHEDULE,
    DELETE_SCHEDULE,
  } from "./scheduleTypes";
  
  const initialState = {
    data: [],
    loading: false,
  };
  
  const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_SCHEDULE:
       
        return {
          ...state,
          loading: false,
          data: [...state.data, action.payload],
        };
      case FETCH_SCHEDULES_REQUEST:
       
        return {
          ...state,
          loading: true,
        };
      case FETCH_SCHEDULES_SUCCESS:
      
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
    
      default:
        return state;
    }
  };
  
  export default scheduleReducer;
  