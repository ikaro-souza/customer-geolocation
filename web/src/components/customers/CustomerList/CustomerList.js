import { connect } from "react-redux";

import {
  getCurrentPage,
  getCustomer,
  getCustomerList,
  getTotalPages,
  isCustomersLoading,
  ranFetchCustomers,
} from "../../../store/customers/selectors";
import {
  fetchCustomer,
  fetchCustomerLocation,
  fetchCustomers,
} from "../../../store/customers/actions";

import CustomerListViewController from "./CustomerListViewController";

const mapStateToProps = (state) => ({
  customerList: getCustomerList(state),
  customer: getCustomer(state),
  ranFetch: ranFetchCustomers(state),
  loading: isCustomersLoading(state),
  currentPage: getCurrentPage(state),
  totalPages: getTotalPages(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCustomers: (page) => dispatch(fetchCustomers(page)),
  fetchCustomer: (id) => dispatch(fetchCustomer(id)),
  fetchCustomerLocation: (customerId) =>
    dispatch(fetchCustomerLocation(customerId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerListViewController);
