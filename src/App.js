import React from "react";
import { Box, Stack }from "@mui/material";
import SideNavBar from "./components/sidenavbar/sidenavbar";
import Header from "./components/header/header";


function App() {
  return (
    <Box>
      <Stack direction="row">
        <SideNavBar/>
        <Header/>
      </Stack>
      
    </Box>
    
  ) 
}

export default App;
  