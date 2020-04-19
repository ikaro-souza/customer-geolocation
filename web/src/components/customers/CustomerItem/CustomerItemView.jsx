import React from "react";
import { Table } from "semantic-ui-react";

const CustomerItemView = ({
  customer: { firstName, lastName, gender, email, company, title },
}) => {
  return (
    <Table.Row>
      <Table.Cell>{firstName}</Table.Cell>
      <Table.Cell>{lastName}</Table.Cell>
      <Table.Cell>{gender}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{company}</Table.Cell>
      <Table.Cell>{title}</Table.Cell>
    </Table.Row>
  );
};

export default CustomerItemView;
