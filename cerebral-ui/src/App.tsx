import { FluentProvider, webLightTheme, Text } from "@fluentui/react-components";
import * as React from "react";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { IStackProps, Stack } from "@fluentui/react";
import { Default as BreadCrumbs } from './components/BreadCrumbs';
import { SingleSelect as DataGrid } from './components/DataGrid';
import MessageBar from "./components/MessageBar";
import Toolbar from "./components/Toolbar";

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
        <Stack>
          <BreadCrumbs />
          <Stack horizontal horizontalAlign="start">
            <Text size={500}>Applications</Text>
          </Stack>
          <MessageBar />
          <Toolbar />
          <DataGrid />
        </Stack>
      </Main>
      
    </FluentProvider>
  );
};

export default App;