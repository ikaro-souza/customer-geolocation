import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import CustomerListView from "./CustomerListView";
import CustomerModel from "../../../models/CustomerModel";

const CustomerListViewController = ({
  customerList,
  customer,
  loading,
  ranFetch,
  currentPage,
  totalPages,
  fetchCustomers,
  fetchCustomer,
  fetchCustomerLocation,
}) => {
  const ranFetchCustomer = useRef(false);

  useEffect(() => {
    if (!ranFetch) fetchCustomers();
    if (ranFetchCustomer.current) {
      fetchCustomerLocation(customer.id);
      ranFetchCustomer.current = false;
    }
  }, [
    fetchCustomers,
    ranFetch,
    fetchCustomer,
    fetchCustomerLocation,
    customer.id,
  ]);

  const onPageChangeHandler = (event, data) => {
    fetchCustomers(data.activePage);
  };

  const onCustomerRowClickHandler = (customerId) => {
    fetchCustomer(customerId);
    ranFetchCustomer.current = true;
  };

  return (
    <CustomerListView
      customerList={customerList}
      currentPage={currentPage}
      totalPages={totalPages}
      loading={loading}
      onPageChangeHandler={onPageChangeHandler}
      onCustomerRowClickHandler={onCustomerRowClickHandler}
    />
  );
};

CustomerListViewController.propTypes = {
  customerList: PropTypes.arrayOf(CustomerModel).isRequired,
  customer: PropTypes.objectOf(CustomerModel).isRequired,
  loading: PropTypes.bool.isRequired,
  ranFetch: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  fetchCustomers: PropTypes.func.isRequired,
  fetchCustomer: PropTypes.func.isRequired,
  fetchCustomerLocation: PropTypes.func.isRequired,
};

export default CustomerListViewController;
