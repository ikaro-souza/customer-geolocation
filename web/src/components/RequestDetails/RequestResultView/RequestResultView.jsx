import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

import RequestResultModel from "../../../models/requests/RequestResultModel";
import { createUseStyles, useTheme } from "react-jss";
import { commonStyles } from "../../../common/theme/commonStyles";

const useStyles = createUseStyles({
  ...commonStyles,
  code: {
    backgroundColor: "#001d34",
    color: "white",
    padding: ({ theme }) => theme.spacing,
  },
});

const RequestResultView = ({ resultModel }) => {
  const { status } = resultModel;

  const theme = useTheme();
  const styles = useStyles({ theme });

  return (
    <section className={styles.mb3}>
      <header>
        <Header as={"h4"}>{`${status.code} - ${status.name}`}</Header>
      </header>
      <main>
        <p>Example:</p>

        <pre className={styles.code}>
          {JSON.stringify(resultModel, null, 2)}
        </pre>
      </main>
    </section>
  );
};

RequestResultView.propTypes = {
  resultModel: PropTypes.objectOf(RequestResultModel).isRequired,
};

export default RequestResultView;
