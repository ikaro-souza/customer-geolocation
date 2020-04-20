import * as TYPE from "./actionTypes";
import CustomerListRequestModel from "../../models/requests/CustomerListRequestModel";
import CustomerRequestModel from "../../models/requests/CustomerRequestModel";

const initialState = {
  customerList: new CustomerListRequestModel(1),
  customer: new CustomerRequestModel(),
  currentPage: 1,
};

function requestsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPE.UPDATE_CUSTOMER_LIST_REQUEST:
      return {
        ...state,
        customerList: new CustomerListRequestModel(
          payload.currentPage,
          payload.count,
          payload.customerList
        ),
        currentPage: payload.currentPage,
      };

    case TYPE.UPDATE_CUSTOMER_REQUEST:
      return {
        ...state,
        customer: new CustomerRequestModel(payload.customer),
      };

    default:
      return state;
  }
}
export default requestsReducer;
