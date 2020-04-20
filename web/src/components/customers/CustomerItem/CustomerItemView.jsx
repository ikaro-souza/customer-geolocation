import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

import CustomerModel from "../../../models/CustomerModel";

const CustomerItemView = ({
  customer: { id, firstName, lastName, gender, email, company, title },
  onClickHandler,
}) => {
  return (
    <Table.Row onClick={() => onClickHandler(id)}>
      <Table.Cell>{firstName}</Table.Cell>
      <Table.Cell>{lastName}</Table.Cell>
      <Table.Cell>{gender}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{company}</Table.Cell>
      <Table.Cell>{title}</Table.Cell>
    </Table.Row>
  );
};

CustomerItemView.propTypes = {
  customer: PropTypes.objectOf(CustomerModel).isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default CustomerItemView;
