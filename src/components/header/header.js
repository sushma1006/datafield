import React from "react";
import {    
            Box,
            AppBar,
            TextField,
            Stack,
            InputAdornment, 
            createTheme, 
            ThemeProvider, 
            CssBaseline, 
        } from "@mui/material";
import Notification from "../../assets/icons/notification";
import Search from "../../assets/icons/search";
import Lexend from "../../assets/fonts/lexend_latin.woff2"

function Header () {
    const theme = createTheme({
        typography: {
            fontFamily: 'Lexend',
        },
        components:{
            MuiCssBaseline:{
                styleOverrides:
                `@font-face {
                    font-family: 'Lexend';
                    font-sixe: 16;
                    font-weight: 500;
                    src : url(${Lexend}) format('woff2');
                }`,
            },
        },
    });
    
    return(
        
        <Box sx={{ flexGrow: 1}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                
                <AppBar 
                    sx={{
                        position :"static",
                        height:"64px", 
                        background: " #F4F5F5", 
                        boxShadow: "none", 
                        padding:"8px", 
                        justifyContent: "space-between"  
                    }}
                >

                    <Stack 
                        direction="row" 
                        justifyContent= "space-between" 
                        alignItems="center" 
                        padding="8px"
                    >
                        <TextField
                               
                            sx={{
                                width: 500, 
                                background:"#ECEEEE", 
                                padding:"2px 10px",
                                borderRadius:"6px", 
                                
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">{Search("18","18","#808080")}</InputAdornment>
                                ),
                                disableUnderline: true
                            }}
                            variant="standard"
                            placeholder="Search"
                        />
                        <Stack padding="8px"> {Notification("20", "20","#808080" )}</Stack>
                    </Stack>

                </AppBar>

            </ThemeProvider>
        </Box>
    )
}

export default Header;