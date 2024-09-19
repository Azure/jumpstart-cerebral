import * as React from "react";

import { FluentProvider, webLightTheme, Text } from "@fluentui/react-components";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { IStackProps, IStackTokens, Stack } from "@fluentui/react";
import { Default as BreadCrumbs } from './components/BreadCrumbs';
import { SingleSelect as DataGrid } from './components/DataGrid';
import Toolbar from "./components/Toolbar";
import Message from "./components/Message";

const Main = (props: IStackProps) => (
  <Stack
    horizontal
    grow={1}
    disableShrink
    {...props}
  />
);

const themedMediumStackTokens: IStackTokens = {
  childrenGap: 'm',
  padding: 'm',
};

export const App: React.FunctionComponent = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <Main>
        <SideMenu />
        <Stack tokens={themedMediumStackTokens}>
          <BreadCrumbs />
          <Stack horizontal horizontalAlign="start">
            <Text size={700}>Applications</Text>
          </Stack>
          <Message />
          <Toolbar />
          <DataGrid />
        </Stack>
      </Main>
      
    </FluentProvider>
  );
};

export default App;