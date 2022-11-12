import React from "react";
import {
    Typography, 
            Divider,
            createTheme, 
            ThemeProvider, 
            CssBaseline, 
            Button,
            ToggleButton,
            ToggleButtonGroup,
            Box,
            Stack,
} from "@mui/material";
import Lexend from "../../assets/fonts/lexend_latin.woff2"

import ArrowIcon from "../../assets/icons/arrowIcon";
import RenameIcon from "../../assets/icons/renameIcon";
import { useState } from "react";

function Content(){
    const theme = createTheme({
        typography: {
            fontFamily: 'Lexend',
        },
        components:{
            MuiCssBaseline:{
                styleOverrides:
                `@font-face {
                    font-family: 'Lexend';
                    font-size: 16;
                    font-weight: 500;
                    src : url(${Lexend}) format('woff2');
                }`,
            },
        }
    });

    const [select, setSelect] = useState();

    const handleChange = (event, select) => {
      setSelect(select);
    };

    return(
       <Box><Stack 
       direction="row" 
       justifyContent="space-between"  
       alignItems="center" 
       height="68px" 
       padding="0 16px"
   >
       <ThemeProvider theme={theme}>
           <CssBaseline/>

               <Stack direction="row" spacing={1} alignItems="center">
                   <Typography sx={{color: "#2EA871"}}> Settings </Typography>
                   <Stack>{ArrowIcon()}</Stack>
                   <Typography>Data Fields</Typography>
               </Stack>
               
               <Button  
                   sx={{
                       textTransform: "none", 
                       color: "#2EA871", 
                       background:" rgba(51, 188, 126, 0.12)", 
                       boxShadow : "none",
                       borderRadius: "8px",
                       "&:hover": {
                           background:" rgba(51, 188, 126, 0.12)", 
                           boxShadow: "none",
                       }
                   }} 
                   variant="contained" 
                   startIcon={RenameIcon()}>
                   Rename Modules
               </Button>

       </ThemeProvider>
   </Stack>
   <Divider/>
   <Stack direction="row" padding="16px" spacing={2}>
   <ThemeProvider theme={theme}>
           <CssBaseline/>

       <Stack direction="row" sx={{background : " rgba(51, 188, 126, 0.12)"}}>
           <ToggleButtonGroup
               color="primary"x
               variant="contained"
               value={select}
               exclusive
               onChange={handleChange}
           >
               <ToggleButton 
                   value="contacts" 
                   sx={{
                       textTransform: "none", 
                       background : " rgba(51, 188, 126, 0.12)", 
                       border : "none", 
                       borderRadius: "8px"
                   }}
               >
                   <Typography>Contact</Typography>
               </ToggleButton>
               <ToggleButton 
                   value="companies" 
                   sx={{
                       textTransform: "none", 
                       background : " rgba(51, 188, 126, 0.12)", 
                       border : "none", 
                       borderRadius: "8px"
                   }}
               >
                   <Typography>Companies</Typography>
               </ToggleButton>
               <ToggleButton 
                   value="leads" 
                   sx={{
                       textTransform: "none", 
                       background : " rgba(51, 188, 126, 0.12)", 
                       border : "none", 
                       borderRadius: "8px"
                   }}
               >
                   <Typography>Leads</Typography>
               </ToggleButton>
           </ToggleButtonGroup>
       </Stack>
       
       <Stack direction="row" spacing={2}>
           <Button variant="contained"
               sx={{
                   textTransform: "none",
                   boxShadow : "none", 
                   background:" rgba(51, 188, 126, 0.12)", 
                   color: "#2EA871",
                   borderRadius: "8px",
                   "&:hover": {
                       background:" rgba(51, 188, 126, 0.12)", 
                       boxShadow: "none",
                   }
               }}
           >
               <Typography>System Fields</Typography>
           </Button>
           <Button  variant="contained" 
               sx={{
                   textTransform: "none",
                   boxShadow : "none", 
                   background:" rgba(51, 188, 126, 0.12)", 
                   color: "#2EA871",
                   borderRadius: "8px",
                   "&:hover": {
                       background:" rgba(51, 188, 126, 0.12)", 
                       boxShadow: "none",
                   } 
               }}
           >
               <Typography>Custom Fields</Typography>
           </Button>
       </Stack>
       </ThemeProvider>
   </Stack></Box> 
    )
}

export default Content;