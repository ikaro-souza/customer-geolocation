import React from "react";
import { Container, Loader, Pagination, Table } from "semantic-ui-react";

import CustomerItemView from "../CustomerItem/CustomerItemView";
import CustomerModel from "../../../models/CustomerModel";

const CustomerListView = ({
  customerList,
  currentPage,
  totalPages,
  loading,
  onPageChangeHandler,
}) => {
  return (
    <Table celled compact={"very"} selectable size={"small"} >
      <Table.Header>
        <Table.Row>
          {Object.getOwnPropertyNames(new CustomerModel())
            .slice(1)
            .map((property, index) => (
              <Table.HeaderCell key={index}>{property}</Table.HeaderCell>
            ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {loading ? (
          <Table.Row>
            <Table.Cell colSpan={6}>
              <Loader active inline={"centered"} indeterminate />
            </Table.Cell>
          </Table.Row>
        ) : (
          customerList.map((customer) => (
            <CustomerItemView customer={customer} key={customer.id} />
          ))
        )}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan={6}>
            <Container textAlign={"center"}>
              <Pagination
                totalPages={totalPages}
                activePage={currentPage}
                boundaryRange={3}
                onPageChange={onPageChangeHandler}
              />
            </Container>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default CustomerListView;
