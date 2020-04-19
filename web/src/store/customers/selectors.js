export const getCustomerList = (state) => state.customers.customerList.customers;
export const ranFetchCustomers = (state) => state.customers.customerList.fetched;
export const isCustomersLoading = (state) => state.customers.customerList.loading;

export const getCustomer = (state) => state.customers.customer.model;
export const ranFetchCustomer = (state) => state.customers.customer.fetched;
export const isCustomerLoading = (state) => state.customers.customer.loading;

export const getCurrentPage = (state) => state.customers.pagination.current;
export const getTotalPages = (state) => state.customers.pagination.totalPages;