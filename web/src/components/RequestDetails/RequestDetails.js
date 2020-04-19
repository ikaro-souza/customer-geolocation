import { connect } from "react-redux";

import RequestDetailsViewController from "./RequestDetailsViewController";
import { getRequestModels } from "../../store/requests/selectors";

const mapStateToProps = (state, ownProps) => ({
  requestModels: getRequestModels(state),
  requestType: ownProps.requestType,
});

export default connect(mapStateToProps)(RequestDetailsViewController);
