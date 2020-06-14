import {
    FETCH_SCHEDULES_REQUEST,
    FETCH_SCHEDULES_SUCCESS,
    POST_SCHEDULE,
    UPDATE_SCHEDULE,
    CANCEL_SCHEDULE,
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
      case CANCEL_SCHEDULE:
          return {
            ...state,
            loading: false,
            data: state.data.filter(sche=>sche.id!==action.payload),
          };
      case UPDATE_SCHEDULE:
          return{
            ...state,
            loading: false,
            data: [...state.data.filter(sche=>sche.id!==action.payload.id),action.payload]
          }
      default:
        return state;
    }
  };
  
  export default scheduleReducer;
  