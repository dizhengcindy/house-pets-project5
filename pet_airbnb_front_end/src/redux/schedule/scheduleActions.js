import axios from 'axios'
import {
    FETCH_SCHEDULES_REQUEST,
    FETCH_SCHEDULES_SUCCESS,
    FETCH_SCHEDULES_FAILURE,
    POST_SCHEDULE,
    UPDATE_SCHEDULE,
    CANCEL_SCHEDULE,
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
  export const updateScheduleSuccess = (newSchedule) => {
    return {
      type: UPDATE_SCHEDULE,
      payload: newSchedule,
    };
  };
  export const cancelScheduleSuccess = (id) => {
    return {
      type:CANCEL_SCHEDULE,
      payload: id,
    };
  };
  export const cancelSchedule = (id) => {
    console.log(id)
    return (dispatch) => {
      dispatch(fetchScheduleRequest())
      fetch(`${SCHEDULEBASEURL}/${id}`, {
        method: "DELETE",
      })
      dispatch(cancelScheduleSuccess(id));//different
    };}

  export const fetchSchedules = (userId) => {
    return (dispatch) => {
      dispatch(fetchScheduleRequest());
      fetch(`${SCHEDULEBASEURL}/userSchedules/${userId}`)
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

    export const updateSchedule = (id,updateInfo) => {
      console.log(updateInfo)
// debugger
      return (dispatch) => {
        dispatch(fetchScheduleRequest())
        
        // axios.patch(
        //    `${SCHEDULEBASEURL}/${id}`,
        //  updateInfo
        
        // ) .then(function (response) {
        //   debugger
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });


  fetch(`${SCHEDULEBASEURL}/${id}`, {
          method: "PATCH",
          //Active Storage won’t allow attachments to be sent with headers.
          // To be accepted by the database, the headers must be removed. 
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: //updateInfo
           JSON.stringify(updateInfo ),
        })
          .then((res) => res.json())
          .then((schedule) => {
           
            if (schedule.error) {
              dispatch(fetchScheduleFailure(schedule.error));
            } else {
              dispatch(updateScheduleSuccess(schedule));//different
              console.log("ABCDEFG")
            }
          });
     };}


