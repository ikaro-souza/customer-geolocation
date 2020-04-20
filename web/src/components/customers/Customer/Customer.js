import { connect } from "react-redux";

import {
  getCustomer,
  isCustomerLoading,
  ranFetchCustomer,
} from "../../../store/customers/selectors";
import CustomerViewController from "./CustomerViewController";
import {
  fetchCustomer,
  fetchCustomerLocation,
} from "../../../store/customers/actions";

const mapStateToProps = (state, ownProps) => ({
  customerId: ownProps.id ?? 1,
  loading: isCustomerLoading(state),
  ranFetch: ranFetchCustomer(state),
  customer: getCustomer(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCustomer: (id) => dispatch(fetchCustomer(id)),
  fetchCustomerLocation: (id) => dispatch(fetchCustomerLocation(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerViewController);
