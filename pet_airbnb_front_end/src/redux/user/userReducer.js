import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    POST_USER,
    AUTH_USER,
    UPDATE_USER,
    DELETE_USER,
  } from "./userTypes";
  
  const initialState = {
    data: [],
    //  userId:localStorage.getItem("user_id"),
    loading: false,
    // error:null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      // case POST_USER:
      //   return {
      //     ...state,
      //     loading: false,
      //     data:  action.payload,
          

      //   };
        case UPDATE_USER:
          return {
            ...state,
            loading: false,
            data:  action.payload,
  
          };
        // case AUTH_USER:
        //   // console.log("POST_USER")
        //   return {
        //     ...state,
        //     loading: false,
        //     data: action.payload,
        //     error:""
        //   };
      case FETCH_USERS_REQUEST:
        // console.log("FETCH_USERS_REQUEST")
        return {
          ...state,
          loading: true,
         
        };

      case FETCH_USERS_FAILURE:
        return {
          ...state,
          error:action.error
        }
      case FETCH_USERS_SUCCESS:
        // console.log("FETCH_USERS_SUCCESS")
        return {
         ...state,
          loading: false,
          data: action.payload,
          error: null
        };
    
      default:
        return state;
    }
  };
  
  export default userReducer;
  