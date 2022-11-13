import React from "react";
import { 
            Box,
            AppBar,
            TextField,
            Stack,
            InputAdornment, 
            Typography, 
            Divider, 
            createTheme, 
            ThemeProvider, 
            CssBaseline, 
            Button,
            ToggleButton,
            ToggleButtonGroup,
            Checkbox,
            Paper
        } from "@mui/material";
import Notification from "../../assets/icons/notification";
import Search from "../../assets/icons/search";
import Lexend from "../../assets/fonts/lexend_latin.woff2"
import ArrowIcon from "../../assets/icons/arrowIcon";
import RenameIcon from "../../assets/icons/renameIcon";
import AddIcon from "../../assets/icons/addIcon";
import { useState } from "react";
import { alpha } from "@mui/material";
import Drag from "../../assets/icons/drag";

function Content () {
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

        palette:{
            primary:{
                main: "#FFFFFF",
            },
        }
    });
    
    const [select, setSelect] = useState();
    const handleChange = (event, newValue) => {
      setSelect(newValue);
    };

    const contactValues = [
        {
            name : "First Name",
        },
        {
            name : "Last Name",
        },
        {
            name : "Mobile",
        },
        {
            name : "Mobile Type",
        },
        {
            name : "Email",
        },
        {
            name : "Email Type",
        },
        {
            name : "Company",
        },
        {
            name : "Source",
        },
        {
            name : "Stage",
        },
    ]
     
    const styles = {
        "toggleButton" : {
            textTransform: "none", 
            background : " rgba(51, 188, 126, 0.12)", 
            color: alpha("#000000", 0.6),
            border : "none", 
            borderRadius: "8px"
        },
        "button" :{
            textTransform: "none",
            boxShadow : "none", 
            background:" rgba(51, 188, 126, 0.12)", 
            color: "#2EA871",
            borderRadius: "8px",
            "&:hover": {
                background:" rgba(51, 188, 126, 0.12)", 
                boxShadow: "none",
            } 
        }
    }
    
    return(
        // search
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
                                border:"none", 
                                padding:"2px 10px",
                                borderRadius:"6px", 
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">{Search()}</InputAdornment>
                                ),
                                disableUnderline: true
                            }}
                            variant="standard"
                            placeholder="Search"
                        />
                        <Stack padding="8px"> {Notification()}</Stack>
                    </Stack>
                </AppBar>

                {/* Renamemodule */}
                <Stack 
                    direction="row" 
                    justifyContent="space-between"  
                    alignItems="center" 
                    height="68px" 
                    padding="0 16px"
                >
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
                        startIcon={RenameIcon()}
                    >
                        Rename Modules
                    </Button>
                </Stack>
                <Divider/>

                {/* ToogleButton */}
                <Stack direction="row" padding="16px" spacing={2}>
                        <Stack direction="row" sx={{background : " rgba(51, 188, 126, 0.12)"}}>
                        <ToggleButtonGroup
                            color="primary"
                            background="#FF0000"
                            variant="contained"
                            value={select}
                            exclusive
                            onChange={handleChange}
                            sx={{
                                "&.Mui-selected":{
                                    color:"#000000"
                                }
                            }}
                        >
                            <ToggleButton 
                                value="contacts" 
                                sx={styles.toggleButton}
                            >
                                <Typography>Contact</Typography>
                            </ToggleButton>
                            <ToggleButton 
                                value="companies" 
                                sx={styles.toggleButton}
                            >
                                <Typography>Companies</Typography>
                            </ToggleButton>
                            <ToggleButton 
                                value="leads" 
                                sx={styles.toggleButton}
                            >
                                <Typography>Leads</Typography>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>
                
                    <Stack direction="row" spacing={2}>
                        <Button 
                            variant="contained"
                            sx={styles.button}
                            startIcon={AddIcon()}
                        >
                            System Fields
                        </Button>
                        <Button  
                            variant="contained" 
                            sx={styles.button}
                            startIcon={AddIcon()}
                        >
                            Custom Fields
                        </Button>
                    </Stack>
                </Stack>

                {/* values below togglebutton */}
                <Stack >
                    {
                        contactValues.map((contactName, index) => {
                            return(
                                <Stack padding="8px 16px">
                                    <Paper variant="outlined">
                                        <Box width="90vw" display="flex" direction="row" alignItems="center" >
                                        <Stack direction="row" spacing={2} >
                                            <Stack>{Drag()}</Stack>
                                            <Typography key={index}>
                                                {contactName.name}
                                            </Typography>
                                            <Typography sx={{background:" rgba(51, 188, 126, 0.12)",padding : "3px", borderRadius: "8px"}}>Text</Typography>
                                        </Stack>
                                        
                                        
                                        <Stack direction="row" alignItems="center">
                                            <Checkbox
                                                sx={{
                                                    '&.Mui-checked': {
                                                    color:"#2EA871",
                                                    },
                                                }}
                                            />
                                            <Typography>Add View</Typography>
                                            <Checkbox
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color:"#2EA871",
                                                    },
                                                }} 
                                            />
                                            <Typography>Required</Typography>
                                        </Stack>
                                        </Box>
                                        
                                    </Paper>
                                </Stack>
                            )
                        })
                    }
                </Stack>
            </ThemeProvider>
        </Box>
    )
}

export default Content;