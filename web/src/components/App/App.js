import React from "react";
import { Provider } from "react-redux";

import store from "../../store/store";

import AppView from "./AppView";

const App = () => (
  <Provider store={store}>
    <AppView />
  </Provider>
);
export default App;
