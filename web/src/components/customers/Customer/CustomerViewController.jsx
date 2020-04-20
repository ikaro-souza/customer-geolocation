import React, { useEffect } from "react";
import PropTypes from "prop-types";

import CustomerModel from "../../../models/CustomerModel";
import CustomerView from "./CustomerView";
import { EXAMPLE_CUSTOMER } from "../../../constants";

const CustomerViewController = ({
  customerId,
  loading,
  ranFetch,
  customer,
  fetchCustomer,
  fetchCustomerLocation,
}) => {
  useEffect(() => {
    if (!ranFetch) fetchCustomer(customerId);
    else if (ranFetch && customer.firstName !== EXAMPLE_CUSTOMER.firstName)
      fetchCustomerLocation(customerId);
  }, [customerId, ranFetch, fetchCustomer]);

  return <CustomerView customer={customer} loading={loading} />;
};

CustomerViewController.propTypes = {
  customerId: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  ranFetch: PropTypes.bool.isRequired,
  customer: PropTypes.objectOf(CustomerModel).isRequired,
  fetchCustomer: PropTypes.func.isRequired,
};

export default CustomerViewController;
