
  import{
    FETCH_COMPANIES_REQUEST,
    FETCH_COMPANIES_SUCCESS,
    FILTER_COMPANIES
  } from "./companyTypes";

  const initialState = {
    data:[],
    display:[],
  
    loading: false,
  };
  
  const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case FETCH_COMPANIES_REQUEST:
        // console.log("FETCH_USERS_REQUEST")
        return {
          ...state,
          loading: true,
        };
      case FETCH_COMPANIES_SUCCESS:
        // console.log("FETCH_USERS_SUCCESS")
        return {
          ...state,
          loading: false,
          data: action.payload,
          display: action.payload
        };
      case FILTER_COMPANIES:
        let showComps = state.data

        if(action.payload.state !=="All"){
          showComps = state.data.filter(comp=>comp.state===action.payload.state)
        }
        if(action.payload.service !=="All"){
         

          showComps = showComps.filter(comp=> comp.services_types.includes(action.payload.service))
        }
        return{
          ...state,
          display:showComps

        }
      default:
        return state;
    }
  };
  
  export default companyReducer;
  