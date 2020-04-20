import axios from "axios";

import store from "../store";
import * as TYPE from "./actionTypes";
import {
  CUSTOMERS_API_ENDPOINT,
  LOCATION_API_ENDPOINT,
  PAGE_SIZE,
} from "../../constants";
import {
  updateCustomerListRequest,
  updateCustomerRequest,
} from "../requests/actions";
import { customerModelFromObject } from "../../models/mappers";
import { getCustomer } from "./selectors";

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
      .get(CUSTOMERS_API_ENDPOINT + id)
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

export const fetchCustomerLocation = (customerId) => {
  const state = store.getState();
  const customerModel = getCustomer(state);

  return (dispatch) => {
    const url = LOCATION_API_ENDPOINT + customerId;
    axios
      .get(url)
      .then((response) => {
        customerModel.setLocation(response.data);

        dispatch({
          type: TYPE.FETCH_CUSTOMER_LOCATION_SUCCESS,
          payload: { customer: customerModel },
        });
        dispatch(updateCustomerRequest(customerModel));
      })
      .catch((error) =>
        dispatch({
          type: TYPE.FETCH_CUSTOMER_LOCATION_FAIL,
          payload: { error },
        })
      );
  };
};
