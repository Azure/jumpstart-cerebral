import * as React from "react";

import { FluentProvider, webLightTheme, Text } from "@fluentui/react-components";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { IStackProps, IStackTokens, Stack } from "@fluentui/react";
import { Default as BreadCrumbs } from './components/BreadCrumbs';
import { SingleSelect as DataGrid } from './components/DataGrid';
import Toolbar from "./components/Toolbar";
import Message from "./components/Message";
import { CopilotProvider, OutputCard } from "@fluentui-copilot/react-copilot";
import Copilot from "./components/Copilot";
import { useState } from "react";

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
  const [copilotOpen, setCopilotOpen] = useState(false);
  
  return (
    <FluentProvider theme={webLightTheme}>
      <CopilotProvider
        mode="sidecar"
      >
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
          <Copilot
              isOpen
            />
        </Main>
      </CopilotProvider>
    </FluentProvider>
  );
};

export default App;