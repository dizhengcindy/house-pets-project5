import {
    FETCH_SCHEDULES_REQUEST,
    FETCH_SCHEDULES_SUCCESS,
    FETCH_SCHEDULES_FAILURE,
    POST_SCHEDULE,
    PATCH_SCHEDULE,
    DELETE_SCHEDULE,
  } from "./scheduleTypes";
  
  const SCHEDULEBASEURL = "http://localhost:3000/schedules"

  export const fetchScheduleSuccess = (schedules) => {
    return {
      type: FETCH_SCHEDULES_SUCCESS,
      payload: schedules,
    };
  };
  
  export const fetchScheduleFailure = (error) => {
    return {
      type: FETCH_SCHEDULES_FAILURE,
      error: error,
    };
  };
  
  export const fetchScheduleRequest = () => {
    return {
      type: FETCH_SCHEDULES_REQUEST,
    };
  };
  
  export const postScheduleSuccess = (newSchedule) => {
    return {
      type: POST_SCHEDULE,
      payload: newSchedule,
    };
  };
    
  export const fetchSchedules = () => {
    return (dispatch) => {
      dispatch(fetchScheduleRequest());
      fetch(SCHEDULEBASEURL)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            dispatch(fetchScheduleFailure(data.error));
          } else {
            dispatch(fetchScheduleSuccess(data));
          }
        });
    };
  };
  
  export const postSchedule = (newSchedule) => {
    console.log(newSchedule)
    return (dispatch) => {
      dispatch(fetchScheduleRequest())
      fetch(SCHEDULEBASEURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(
            newSchedule
            
          
        ),
      })
        .then((res) => res.json())
        .then((schedule) => {
          if (schedule.error) {
            dispatch(fetchScheduleFailure(schedule.error));
          } else {
            dispatch(postScheduleSuccess(schedule));//different
          }
        });
    };}

   