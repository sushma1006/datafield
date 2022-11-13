import React from "react";
import { Box, Stack }from "@mui/material";
import SideNavBar from "./components/sidenavbar/sidenavbar";
import Content from "./components/Content/content";


function App() {
  return (
    <Box>
      <Stack direction="row">
        <SideNavBar/>
        <Content/>
      </Stack>
      
    </Box>
    
  ) 
}

export default App;
  