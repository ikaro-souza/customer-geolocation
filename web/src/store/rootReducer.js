import customersReducer from "./customers/reducer";
import requestsReducer from "./requests/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ requests: requestsReducer, customers: customersReducer });
export default rootReducer;
