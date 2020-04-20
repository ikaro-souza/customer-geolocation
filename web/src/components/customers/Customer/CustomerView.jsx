import React from "react";
import PropTypes from "prop-types";

import CustomerModel from "../../../models/CustomerModel";
import { Loader, Table } from "semantic-ui-react";

const CustomerView = ({ loading, customer }) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {Object.getOwnPropertyNames(customer).map((property, index) => (
            <Table.HeaderCell key={index}>{property}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          {loading ? (
            <Table.Cell>
              <Loader active inline={"centered"} indeterminate />
            </Table.Cell>
          ) : (
            Object.getOwnPropertyNames(customer).map((property, index) => (
              <Table.Cell key={index}>
                {property === "location"
                  ? String(customer[property])
                  : customer[property]}
              </Table.Cell>
            ))
          )}
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

CustomerView.propTypes = {
  loading: PropTypes.bool.isRequired,
  customer: PropTypes.objectOf(CustomerModel).isRequired,
};

export default CustomerView;
