import React from "react";
import PropTypes from "prop-types";
import { Header, Item, Label, Table } from "semantic-ui-react";
import { useTheme, createUseStyles } from "react-jss";

import { commonStyles } from "../../common/theme/commonStyles";
import RequestModel from "../../models/requests/RequestModel";
import RequestResultView from "./RequestResultView";

const useStyles = createUseStyles({
  ...commonStyles,
  requestFieldName: {
    color: process.env.REACT_APP_PRIMARY_COLOR,
    fontWeight: "bolder",
  },
});

const RequestDetailsView = ({ requestModel }) => {
  const theme = useTheme();
  const styles = useStyles({ theme });

  return (
    <Item className={styles.mb4}>
      <Item.Content>

        <Item.Header className={styles.mb3}>
          <Header as={"h2"} className={styles.mb2}>
            <Label size={"medium"} color={"olive"} horizontal>
              {requestModel.method}
            </Label>
            &nbsp;{requestModel.name}
          </Header>
          <Label size={"small"}>{requestModel.endpoint}</Label>
        </Item.Header>

        <Item.Meta className={styles.mb3}>
          <Header as={"h3"} className={styles.mb2}>Parameters:</Header>
          <Table definition collapsing compact size={"small"} celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Value</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {requestModel.parameters.map((parameter) => (
                <Table.Row key={parameter.name}>
                  <Table.Cell>{parameter.name}</Table.Cell>
                  <Table.Cell>{parameter.value}</Table.Cell>
                  <Table.Cell>{parameter.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Item.Meta>

        <Item.Meta className={styles.mb3}>
          <Header as={"h3"} className={styles.mb2}>Results:</Header>

          {requestModel.results.map((result, index) => (
            <RequestResultView resultModel={result} key={index} />
          ))}
        </Item.Meta>
      </Item.Content>
    </Item>
  );
};

RequestDetailsView.propTypes = {
  requestModel: PropTypes.objectOf(RequestModel).isRequired,
};

export default RequestDetailsView;
