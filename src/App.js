import React from "react";
import {Stack}from "@mui/material";
import SideNavBar from "./components/sidenavbar/sidenavbar";
import Header from "./components/header/header";
import Content from "./components/content/content";


function App() {
  return (
    <Stack direction="row" >
      <SideNavBar/>
      <Stack flexGrow={1}>
        <Stack>
          <Header/>
        </Stack>
        <Stack>
          <Content/>
        </Stack>
      </Stack>
    </Stack>
  ) ;
}

export default App;
  