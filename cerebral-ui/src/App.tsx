import { FluentProvider, webLightTheme, Text } from "@fluentui/react-components";
//import * as React from "react";
import React, { useState, useEffect } from 'react';
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
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/http://74.249.31.17:5003/api/applications')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);
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
          <div>
          {data.map(item => (
            <div className="post" key={item['application_name']}>
            <h3>{item['configured_status']}</h3>
            <p>{item['configured_version']}</p>
          </div>
          ))}
        </div>
        </Stack>
      </Main>
      
    </FluentProvider>
  );
};

export default App;