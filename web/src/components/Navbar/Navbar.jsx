import React from "react";
import { Container, Header } from "semantic-ui-react";
import { createUseStyles, useTheme } from "react-jss";
import { commonStyles } from "../../common/theme/commonStyles";

const useStyles = createUseStyles({
  ...commonStyles,
  nav: {
    borderBottom: "1px solid #22242626",
    paddingTop: ({ theme }) => theme.spacing * 2,
    paddingBottom: ({ theme }) => theme.spacing * 2,
    paddingLeft: ({ theme }) => theme.spacing * 5,
    paddingRight: ({ theme }) => theme.spacing * 5,
    background: ({ theme }) => theme.primaryColor,
  },
});

const Navbar = () => {
  const theme = useTheme();
  const styles = useStyles({ theme });

  return (
    <Container as={"nav"} fluid className={[styles.nav, styles.mb3].join(" ")}>
      <Container>
        <Header>CGEO</Header>
      </Container>
    </Container>
  );
};

export default Navbar;
