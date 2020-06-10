import { combineReducers } from 'redux';
import userReducer from "./user/userReducer";
import scheduleReducer from "./schedule/scheduleReducer";
import companyReducer from "./company/companyReducer"
import serviceReducer from "./service/serviceReducer"

const rootReducer = combineReducers({
    user: userReducer,
    schedule: scheduleReducer,
    company:companyReducer,
    service:serviceReducer
})

export default rootReducer