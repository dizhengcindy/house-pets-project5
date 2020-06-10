import{
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_FAILURE,
  
  } from "./serviceTypes";
  
  const BASEURL = "http://localhost:3000/services"



  export const fetchServiceSuccess = (services) => {
    return {
      type: FETCH_SERVICES_SUCCESS,
      payload: services,
    };
  };
  
  export const fetchServiceFailure = (error) => {
    return {
      type: FETCH_SERVICES_FAILURE,
      error: error,
    };
  };
  
  export const fetchServiceRequest = () => {
    return {
      type: FETCH_SERVICES_REQUEST,
    };
  };
  
  export const fetchServices = () => {
    return (dispatch) => {
      dispatch(fetchServiceRequest());
      fetch(BASEURL)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            dispatch(fetchServiceFailure(data.error));
          } else {
            //  debugger
            dispatch(fetchServiceSuccess(data));
          }
        });
    };
  };