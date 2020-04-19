import * as TYPE from "./actionTypes";

export const updateCustomerListRequest = (count, customerList, currentPage) => ({
  type: TYPE.CUSTOMER_LIST_FETCH,
  payload: { count, customerList, currentPage },
});

export const updateCustomerRequest = (customer) => ({
  type: TYPE.SINGLE_CUSTOMER_FETCH,
  payload: { customer },
});
