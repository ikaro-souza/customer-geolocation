import React from "react";
import { ThemeProvider } from "react-jss";

const theme = {
  primaryColor: "#ffab00",
  textColor: "#000",
  spacing: 8
};

export default function themed(Component) {
  return class extends React.Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <Component />
        </ThemeProvider>
      );
    }
  };
}
