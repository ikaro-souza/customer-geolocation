import React from "react";
import { Container, Header, Item } from "semantic-ui-react";
import { createUseStyles, useTheme } from "react-jss";

import { commonStyles } from "../../common/theme/commonStyles";
import { requestTypes } from "../../models/requests/RequestModel";

import RequestDetails from "../../components/RequestDetails";
import CustomerList from "../../components/customers/CustomerList";
import Customer from "../../components/customers/Customer";

const HomePage = () => {
  const theme = useTheme();
  const styles = createUseStyles({ ...commonStyles })({ theme });

  return (
    <Container>
      <header className={styles.mb4}>
        <Header as={"h1"}>
          This is a simple playground of the{" "}
          <code>customer_geolocation API</code>
        </Header>
        <p>
          To interact with it, use the customer table on the{" "}
          <a href={"#customerList"}>Customer List</a> section. <br />
          Each of the buttons below the table will fetch a page of customers.{" "}
          <br />
          Clicking on a row will fetch the details of the customer on that row
          and you can see the data on the{" "}
          <a href={"#customerDetails"}>Customer</a> section.
        </p>
      </header>
      <section className={styles.mb4}>
        <a name="customerList" />
        <RequestDetails requestType={requestTypes.CUSTOMER_LIST} />
        <Item>
          <CustomerList />
        </Item>
      </section>
      <section className={styles.mb4}>
        <a name="customerDetails" />
        <RequestDetails requestType={requestTypes.CUSTOMER} />
        <Item>
          <Customer />
        </Item>
      </section>
    </Container>
  );
};

export default HomePage;
