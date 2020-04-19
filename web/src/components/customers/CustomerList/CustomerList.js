import { connect } from "react-redux";

import {
  getCurrentPage,
  getCustomerList,
  getTotalPages,
  isCustomersLoading,
  ranFetchCustomers,
} from "../../../store/customers/selectors";
import { fetchCustomers } from "../../../store/customers/actions";

import CustomerListViewController from "./CustomerListViewController";

const mapStateToProps = (state) => ({
  customerList: getCustomerList(state),
  ranFetch: ranFetchCustomers(state),
  loading: isCustomersLoading(state),
  currentPage: getCurrentPage(state),
  totalPages: getTotalPages(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCustomers: (page) => dispatch(fetchCustomers(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerListViewController);
