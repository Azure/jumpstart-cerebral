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


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


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