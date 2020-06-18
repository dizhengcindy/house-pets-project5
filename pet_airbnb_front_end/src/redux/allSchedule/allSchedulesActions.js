import {
    FETCH_ALLSCHEDULES_REQUEST,
    FETCH_ALLSCHEDULES_SUCCESS,
    FETCH_ALLSCHEDULES_FAILURE,
    UPDATE_ALLSCHEDULES_COMMENT,
  } from "./allSchedulesTypes";
  
  const SCHEDULEBASEURL = "http://localhost:3000/schedules"

  export const fetchAllScheduleSuccess = (schedules) => {
    return {
      type: FETCH_ALLSCHEDULES_SUCCESS,
      payload: schedules,
    };
  };
  
  export const fetchAllScheduleFailure = (error) => {
    return {
      type: FETCH_ALLSCHEDULES_FAILURE,
      error: error,
    };
  };
  
  export const fetchAllScheduleRequest = () => {
    return {
      type: FETCH_ALLSCHEDULES_REQUEST,
    };
  };
  
  export const updateAllSchedulesComment = (updateInfo) => {
    return {
      type: UPDATE_ALLSCHEDULES_COMMENT,
      payload: updateInfo,
    };
  };

  export const fetchAllSchedules = () => {
    return (dispatch) => {
      dispatch(fetchAllScheduleRequest());
      fetch(SCHEDULEBASEURL)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            dispatch(fetchAllScheduleFailure(data.error));
          } else {
            dispatch(fetchAllScheduleSuccess(data));
          }
        });
    };
  };
  
  