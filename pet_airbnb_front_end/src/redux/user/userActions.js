import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    POST_USER,
    UPDATE_USER,
    AUTH_USER,
    DELETE_USER,
    SIGNOUT_REQUEST
  } from "./userTypes";
import { fetchSchedules } from "../index";
  
  const USERBASEURL = "http://localhost:3000/api/v1/users"
  const AUTHURL = "http://localhost:3000/api/v1/login"
  export const fetchUserSuccess = (users) => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users,
    };
  };
  
  export const fetchUserFailure = (error) => {
    return {
      type: FETCH_USERS_FAILURE,
      error: error,
    };
  };
  
  export const fetchUserRequest = () => {
    return {
      type: FETCH_USERS_REQUEST,
    };
  }; 

  export const postUserSuccess = (newUser) => {
    return {
      type: POST_USER,
      payload: newUser,
    };
  };
    
  export const updateUserSuccess = (newUserInfo) => {
    return {
      type: UPDATE_USER,
      payload: newUserInfo,
    };
  };
  // export const fetchUsers = () => {
  //   return (dispatch) => {
  //     dispatch(fetchUserRequest());
  //     fetch(USERBASEURL)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.error) {
  //           dispatch(fetchUserFailure(data.error));
  //         } else {
  //           dispatch(fetchUserSuccess(data));
  //         }
  //       });
  //   };
  // };

  // create newUser, sign up
  export const postUser = (newUser) => {
    console.log(newUser)
    return (dispatch) => {
      dispatch(fetchUserRequest())
      fetch(USERBASEURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(
          {
            user: newUser
          }
        ),
      })
        .then((res) => res.json())
        .then((user) => {
          if (user.error) {
            dispatch(fetchUserFailure(user.error));
          } else {
            dispatch(postUserSuccess(user),
           
            );//different
          }
        });
    };}

    //user log in
    export const authUser = (userInfo) => {
      console.log(userInfo)
      return (dispatch) => {
        dispatch(fetchUserRequest())
        fetch(AUTHURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(
            {
              user: userInfo
            }
          ),
        })
          .then((res) => res.json())
          .then((user) => {
            if (user.error) {
              dispatch(fetchUserFailure(user.error));
            } else {
              // debugger
              dispatch(postUserSuccess(user),
              dispatch(fetchSchedules(user.user.id))
              );//different
            }
          });
      };
  };
  
  //user update information
  export const updateUser = (id,userInfo) => {
    console.log(id,userInfo)
    return (dispatch) => {
      dispatch(fetchUserRequest())
      fetch(`${USERBASEURL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(
          {
            user: userInfo
          }
        ),
      })
        .then((res) => res.json())
        .then((user) => {
          if (user.error) {
            dispatch(fetchUserFailure(user.error));
          } else {
            dispatch(updateUserSuccess(user));//different
          }
        });
    };
};