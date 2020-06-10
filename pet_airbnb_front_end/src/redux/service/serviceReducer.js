
  import{
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_SUCCESS,
  
  } from "./serviceTypes";

  const initialState = {
    data:[],
 
    loading: false,
  };
  
  const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case FETCH_SERVICES_REQUEST:
        // console.log("FETCH_USERS_REQUEST")
        return {
          ...state,
          loading: true,
        };
      case FETCH_SERVICES_SUCCESS:
        // console.log("FETCH_USERS_SUCCESS")
        return {
          ...state,
          loading: false,
          data: action.payload,
          display: action.payload
        };
      
      default:
        return state;
    }
  };
  
  export default serviceReducer;
  