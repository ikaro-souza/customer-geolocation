import React, { useEffect } from "react";
import CustomerListView from "./CustomerListView";

const CustomerListViewController = ({
  customerList,
  loading,
  ranFetch,
  currentPage,
  totalPages,
  fetchCustomers,
}) => {
  useEffect(() => {
    if (!ranFetch) fetchCustomers();
  }, [fetchCustomers, ranFetch]);

  const onPageChangeHandler = (event, data) => {
    fetchCustomers(data.activePage);
  };

  return (
    <CustomerListView
      customerList={customerList}
      currentPage={currentPage}
      totalPages={totalPages}
      loading={loading}
      onPageChangeHandler={onPageChangeHandler}
    />
  );
};

export default CustomerListViewController;
