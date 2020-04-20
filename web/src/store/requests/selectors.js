import { requestTypes } from "../../models/requests/RequestModel";

export const getCustomerListRequestModel = (state) =>
  state.requests.customerList;
export const getCustomerRequestModel = (state) => state.requests.customer;

export const getRequestModels = (state) => [
  {
    type: requestTypes.CUSTOMER_LIST,
    model: getCustomerListRequestModel(state),
  },
  {
    type: requestTypes.CUSTOMER,
    model: getCustomerRequestModel(state),
  },
];
