import * as TYPE from "./actionTypes";

export const updateCustomerListRequest = (
  count,
  customerList,
  currentPage
) => ({
  type: TYPE.UPDATE_CUSTOMER_LIST_REQUEST,
  payload: { count, customerList, currentPage },
});

export const updateCustomerRequest = (customer) => ({
  type: TYPE.UPDATE_CUSTOMER_REQUEST,
  payload: { customer },
});
