import { combineReducers } from 'redux';
import userReducer from "./user/userReducer";
import scheduleReducer from "./schedule/scheduleReducer";
import companyReducer from "./company/companyReducer"
import serviceReducer from "./service/serviceReducer"
import storage from 'redux-persist/lib/storage'
export const SIGNOUT_REQUEST = "SIGNOUT_REQUEST";
// const rootReducer = combineReducers({
//     user: userReducer,
//     schedule: scheduleReducer,
//     company:companyReducer,
//     service:serviceReducer,

// })

// export default rootReducer

const appReducer = combineReducers({
    user: userReducer,
    schedule: scheduleReducer,
    company:companyReducer,
    service:serviceReducer,

})
const rootReducer = (state, action) => {
    if (action.type === SIGNOUT_REQUEST) {
        // for all keys defined in your persistConfig(s)
        // storage.removeItem('persist:root')
        // storage.removeItem('persist:otherKey')

        // state = undefined;
        const { company, service } = state;

    state = { company, service };
    }
    
    return appReducer(state, action)
  }
export default rootReducer