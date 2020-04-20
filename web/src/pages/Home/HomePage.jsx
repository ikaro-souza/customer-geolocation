import React from "react";
import { Container, Item } from "semantic-ui-react";
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
      <section className={styles.mb4}>
        <RequestDetails requestType={requestTypes.CUSTOMER_LIST} />
        <Item>
          <CustomerList />
        </Item>
      </section>
      <section className={styles.mb4}>
        <RequestDetails requestType={requestTypes.CUSTOMER} />
        <Item>
          <Customer />
        </Item>
      </section>
    </Container>
  );
};

export default HomePage;
