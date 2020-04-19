import React, { useRef } from "react";
import PropTypes from "prop-types";

import RequestDetailsView from "./RequestDetailsView";
import RequestModel from "../../models/requests/RequestModel";

const RequestDetailsViewController = ({ requestType, requestModels }) => {
  const requestModel = useRef();

  requestModels.forEach((model) => {
    if (requestType === model.type) requestModel.current = model.model;
  });

  return <RequestDetailsView requestModel={requestModel.current} />;
};
RequestDetailsViewController.propTypes = {
  requestType: PropTypes.number.isRequired,
  requestModels: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.number.isRequired,
      model: PropTypes.objectOf(RequestModel).isRequired,
    }).isRequired
  ).isRequired,
};

export default RequestDetailsViewController;
