import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import * as React from "react";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { IStackProps, Stack } from "@fluentui/react";
import { Default as BreadCrumbs } from './components/BreadCrumbs';

const Main = (props: IStackProps) => (
  <Stack
    horizontal
    grow={1}
    disableShrink
    {...props}
  />
);

export const App: React.FunctionComponent = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Main>
        <SideMenu />
        <BreadCrumbs />
      </Main>
      
    </FluentProvider>
  );
};

export default App;