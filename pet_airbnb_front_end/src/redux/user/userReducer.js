import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    POST_USER,
    AUTH_USER,
    DELETE_USER,
  } from "./userTypes";
  
  const initialState = {
    data: [],
    //  userId:localStorage.getItem("user_id"),
    
    loading: false,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_USER:
        // console.log("POST_USER")
        localStorage.setItem("user_id", action.payload.user.id)
        return {
          ...state,
          loading: false,
          data:  action.payload,

        };
        case AUTH_USER:
          // console.log("POST_USER")
          return {
            ...state,
            loading: false,
            data: action.payload,
          };
      case FETCH_USERS_REQUEST:
        // console.log("FETCH_USERS_REQUEST")
        return {
          ...state,
          loading: true,
        };
      case FETCH_USERS_SUCCESS:
        // console.log("FETCH_USERS_SUCCESS")
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
    
      default:
        return state;
    }
  };
  
  export default userReducer;
  