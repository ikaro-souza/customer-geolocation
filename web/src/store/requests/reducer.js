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
    case TYPE.CUSTOMER_LIST_FETCH:
      return {
        ...state,
        customerList: new CustomerListRequestModel(
          payload.currentPage,
          payload.count,
          payload.customerList
        ),
        currentPage: payload.currentPage,
      };

    default:
      return state;
  }
}
export default requestsReducer;
