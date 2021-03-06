import{
    FETCH_COMPANIES_REQUEST,
    FETCH_COMPANIES_SUCCESS,
    FETCH_COMPANIES_FAILURE,
    FILTER_COMPANIES,
    GET_AVG_RATING,
    SORT_COMPANIES,
  } from "./companyTypes";
  
  const BASEURL = "http://localhost:3000/companies"


  export const filterCompanies = (obj={})=> {
    return {
      type: FILTER_COMPANIES,
      payload: obj,
    };
  };
  export const sortCompanies = (arr)=> {
    return {
      type: SORT_COMPANIES,
      payload: arr,
    };
  };
  export const getAvgRating = (avgRating) => {
    return {
      type: GET_AVG_RATING,
      payload: avgRating,
    };
  };
  export const fetchCompanySuccess = (companies) => {
    return {
      type: FETCH_COMPANIES_SUCCESS,
      payload: companies,
    };
  };
  
  export const fetchCompanyFailure = (error) => {
    return {
      type: FETCH_COMPANIES_FAILURE,
      error: error,
    };
  };
  
  export const fetchCompanyRequest = () => {
    return {
      type: FETCH_COMPANIES_REQUEST,
    };
  };
  
  export const fetchCompanies = () => {
    return (dispatch) => {
      dispatch(fetchCompanyRequest());
      fetch(BASEURL)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            dispatch(fetchCompanyFailure(data.error));
          } else {
            //  debugger
            dispatch(fetchCompanySuccess(data));
          }
        });
    };
  };