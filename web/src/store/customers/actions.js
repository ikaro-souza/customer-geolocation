import axios from "axios";

import * as TYPE from "./actionTypes";
import { API_ENDPOINT, PAGE_SIZE } from "../../constants";
import customerModelFromObject from "../../models/mappers";
import {
  updateCustomerListRequest,
  updateCustomerRequest,
} from "../requests/actions";

export const fetchCustomers = (page = 1) => {
  return (dispatch) => {
    dispatch({ type: TYPE.FETCH_CUSTOMERS });

    axios
      .get(`/api/customers?page=${page}`)
      .then((response) => {
        const { count, results } = response.data;
        const customers = results.map((c) => customerModelFromObject(c));

        dispatch({
          type: TYPE.FETCH_CUSTOMERS_SUCCESS,
          payload: {
            customers,
            currentPage: page,
            totalPages: count / PAGE_SIZE,
          },
        });
        dispatch(updateCustomerListRequest(count, results, page));
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: TYPE.FETCH_CUSTOMERS_FAIL, payload: error });
      });
  };
};

export const fetchCustomer = (id) => {
  return (dispatch) => {
    dispatch({ type: TYPE.FETCH_CUSTOMER });

    axios
      .get(API_ENDPOINT)
      .then((response) => {
        const customer = customerModelFromObject(response.data);
        dispatch({
          type: TYPE.FETCH_CUSTOMER_SUCCESS,
          payload: { customer },
        });
        dispatch(updateCustomerRequest(customer));
      })
      .catch((error) => {
        dispatch({ type: TYPE.FETCH_CUSTOMER_FAIL, payload: { error } });
      });
  };
};
