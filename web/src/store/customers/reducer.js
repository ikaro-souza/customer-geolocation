import * as TYPE from "./actionTypes";
import { EXAMPLE_CUSTOMER } from "../../constants";

const initialState = {
  customerList: {
    customers: [EXAMPLE_CUSTOMER],
    loading: false,
    error: null,
    fetched: false,
  },
  customer: {
    model: EXAMPLE_CUSTOMER,
    loading: false,
    error: null,
    fetched: false,
  },
  pagination: {
    current: 1,
    totalPages: 1,
  },
};

function customersReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TYPE.FETCH_CUSTOMERS:
      return { ...state, loading: true };

    case TYPE.FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customerList: {
          ...state.customerList,
          customers: payload.customers,
          loading: false,
          fetched: true,
        },
        pagination: {
          current: payload.currentPage,
          totalPages: payload.totalPages,
        },
      };

    case TYPE.FETCH_CUSTOMERS_FAIL:
      return {
        ...state,
        customerList: {
          ...state.customerList,
          error: payload.error,
          loading: false,
          fetched: true,
        },
      };

    case TYPE.FETCH_CUSTOMER:
      return { ...state, customer: { ...state.customer, loading: true } };

    case TYPE.FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: {
          ...state.customer,
          model: payload.customer,
          loading: false,
          fetched: true,
        },
      };

    case TYPE.FETCH_CUSTOMER_FAIL:
      return {
        ...state,
        customer: {
          ...state.customer,
          error: payload.error,
          loading: false,
          fetched: true,
        },
      };

    case TYPE.FETCH_CUSTOMER_LOCATION_SUCCESS:
      return {
        ...state,
        customer: {
          ...state.customer,
          model: payload.customer,
        },
      };

    case TYPE.FETCH_CUSTOMER_LOCATION_FAIL:
      return {
        ...state,
        customer: {
          ...state.customer,
          error: payload.error,
        },
      };

    default:
      return state;
  }
}
export default customersReducer;
