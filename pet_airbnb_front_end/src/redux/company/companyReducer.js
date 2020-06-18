
  import{
    FETCH_COMPANIES_REQUEST,
    FETCH_COMPANIES_SUCCESS,
    FILTER_COMPANIES,
    GET_AVG_RATING,
  } from "./companyTypes";

  const initialState = {
    data:[],
    choseState:"All",
    choseService:"All",
    display:[],
    // avgRating: 0,
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
      //  console.log("FETCH_USERS_SUCCESS")
      let checkDisplay = state.display
      if(state.display.length===0){
        checkDisplay=action.payload
      }
        return {
          ...state,
          loading: false,
          data: action.payload,
          display: checkDisplay
        };
    

      case FILTER_COMPANIES:
        let showComps =state.data

        if(action.payload.state !=="All"){
          showComps = state.data.filter(comp=>comp.state===action.payload.state)
        }
        if(action.payload.service !=="All"){
          showComps = showComps.filter(comp=> comp.services_types.includes(action.payload.service))
        }
        return{
          ...state,
          display:showComps,
          choseState:action.payload.state,
          choseService:action.payload.service

        }
      case GET_AVG_RATING:
        let comp = state.data.find(cmp=>cmp.id===action.payload.company_id)
        
            comp.avgRating = action.payload.avg
            comp.numOfComments = action.payload.count

          return{
            ...state,
            data: [...state.data.filter(cmp=>cmp.id!==action.payload.company_id),comp]
          };
      default:
        return state;
    }
  };
  
  export default companyReducer;
  