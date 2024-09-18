import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import * as React from "react";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";

export const App: React.FunctionComponent = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <SideMenu />
      
    </FluentProvider>
  );
};

export default App;