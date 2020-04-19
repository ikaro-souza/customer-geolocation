import React, { Fragment } from "react";

import themed from "../../common/theme/theme";

import HomePage from "../../pages/Home/HomePage";
import NavbarView from "../Navbar";

function AppView() {
  return (
    <Fragment>
      <NavbarView />
      <HomePage />
    </Fragment>
  );
}

export default themed(AppView);
