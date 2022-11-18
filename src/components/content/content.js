import React from "react";
import ArrowIcon from "../../assets/icons/arrowIcon";
import RenameIcon from "../../assets/icons/renameIcon";
import AddIcon from "../../assets/icons/addIcon";
import { useState } from "react";
import { alpha, Container } from "@mui/material";
import Drag from "../../assets/icons/drag";
import Lexend from "../../assets/fonts/lexend_latin_ext.woff2";
import { useEffect} from "react";
import axios from "axios";
import {
        Box,
        Stack,
        Typography, 
        Divider, 
        createTheme, 
        ThemeProvider, 
        CssBaseline,
        Button,
        ToggleButton,
        ToggleButtonGroup,
        Checkbox,
        Paper, 
    }from "@mui/material";

function Content(){
    const theme = createTheme({
        typography: {
            "fontFamily": 'Lexend',
        },
        
        components:{
            MuiCssBaseline:{
                styleOverrides:
                `@font-face {
                    font-family: 'Lexend';
                    font-display: swap;
                    src : url(${Lexend}) format('woff2');
                }`,
            },

            MuiButton: {
                styleOverrides:{
                    root: {
                        fontSize : "14px",
                        fontWeight:500
                    }
                    
                }
            },

            MuiToggleButton: {
                styleOverrides : {
                    root: {
                        fontSize : "14px"
                    }
                }
            },
           
        },
    });

    const [details , setDetails] = useState(null) ;
        useEffect(() => {
            const postTodo = () => {
                const data = {
                    type : "list",
                    data : {
                        source: "Contact",
                        fieldName: "",
                    }
                };
                const headers = {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                }
                const config = { headers, };
                axios.post(
                        'https://api.thelaunchclub.in/fields',
                        data,
                        config,
                        
                )
                .then((response) => {
                    console.log(response.status);
                    console.log({response});
                    setDetails(response.data.data.entity);
                    
                })
                    
            };
            postTodo();
        }, []);
        
    const [select, setSelect] = useState('contacts');
    const handleChangeButton = (event, newValue) => {
        if (newValue != null){
            setSelect(newValue);
        }
    };
    
    
    return(
        <Box sx={{ flexGrow: 1}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    
                {/* Renamemodule */}
                <Stack 
                    direction="row" 
                    justifyContent="space-between"  
                    alignItems="center" 
                    height="68px" 
                    padding="0 16px"
                >

                    <Stack  direction="row" spacing={1} alignItems="center">
                        <Typography fontSize= "16px" fontWeight = "500" sx={{color: "#2EA871"}}> Settings </Typography>
                        <Stack>{ArrowIcon("16", "16", "#000000")}</Stack>
                        <Typography sx={{fontSize: "16px" ,fontWeight : "500"}}>Data Fields</Typography>
                    </Stack>

                    <Button  
                        sx={{textTransform: "none",
                        boxShadow : "none", 
                        background:" rgba(51, 188, 126, 0.12)", 
                        color: "#2EA871",
                        borderRadius: "8px",
                        
                        "&:hover": {
                            background:" rgba(51, 188, 126, 0.12)", 
                            boxShadow: "none",
                        } }} 
                        variant="contained" 
                        startIcon={RenameIcon("20", "20", "#33BC7E")}
                        
                    >
                        Rename Modules
                    </Button>

                </Stack>
                <Divider/>

                {/* ToogleButton */}
                <Stack direction="row" padding="16px 16px 8px 16px" spacing={2}>

                    <Stack>
                        <Paper elevation={0}
                            sx={{
                                boxShadow: "none",  
                                background : " rgba(51, 188, 126, 0.12)",
                                borderRadius: "8px",     
                            }}>

                            <ToggleButtonGroup 
                                size="small"
                                variant="contained"
                                value={select}
                                exclusive
                                onChange={handleChangeButton}
                                sx={{
                                    '.MuiToggleButtonGroup-grouped': {
                                        margin: "4px",
                                        '&:not(:first-of-type)': {
                                            borderRadius: "8px",
                                        },
                                      '&:first-of-type': {
                                        borderRadius: "8px",
                                      },
                                    }
                                }}
                            >
                                <ToggleButton 
                                    value="contacts" 
                                    sx={{textTransform: "none", 
                                    color: alpha("#000000", 0.6),
                                    border : "none",
                                    padding: "6px 12px", 
                                    
                                    "&:hover": {
                                        background :alpha("#000000", 0.02), 
                                    },
                        
                                    "&.Mui-selected":{
                                        color: "#FFFFFF",
                                        background: "#33BC7E",
                                        "&:hover":{
                                            background: "#33BC7E",
                                        }
                                    }}}
                                >
                                    Contacts
                                </ToggleButton>
                                <ToggleButton 
                                    value="companies" 
                                    sx={{textTransform: "none", 
                                    color: alpha("#000000", 0.6),
                                    border : "none",
                                    padding: "6px 12px", 
                                    
                                    "&:hover": {
                                        background :alpha("#000000", 0.02), 
                                    },
                        
                                    "&.Mui-selected":{
                                        color: "#FFFFFF",
                                        background: "#33BC7E",
                                        "&:hover":{
                                            background: "#33BC7E",
                                        }
                                    }}}
                                >
                                    Companies
                                </ToggleButton>
                                <ToggleButton 
                                    value="deals" 
                                    sx={{textTransform: "none", 
                                    color: alpha("#000000", 0.6),
                                    border : "none",
                                    padding: "6px 12px", 
                                    
                                    "&:hover": {
                                        background :alpha("#000000", 0.02), 
                                    },
                        
                                    "&.Mui-selected":{
                                        color: "#FFFFFF",
                                        background: "#33BC7E",
                                        "&:hover":{
                                            background: "#33BC7E",
                                        }
                                    }}}
                                >
                                    Deals
                                </ToggleButton>
                            </ToggleButtonGroup >

                        </Paper>
                    </Stack>
                
                    <Stack direction="row" spacing={2}>

                        <Button 
                            variant="contained"
                            sx={{textTransform: "none",
                            boxShadow : "none", 
                            background:" rgba(51, 188, 126, 0.12)", 
                            color: "#2EA871",
                            borderRadius: "8px",
                            
                            "&:hover": {
                                background:" rgba(51, 188, 126, 0.12)", 
                                boxShadow: "none",
                            } }}
                            startIcon={AddIcon("24", "24", "#2EA871")}
                        >
                            System Fields
                        </Button>

                        <Button  
                            variant="contained" 
                            sx={{textTransform: "none",
                            boxShadow : "none", 
                            background:" rgba(51, 188, 126, 0.12)", 
                            color: "#2EA871",
                            borderRadius: "8px",
                            
                            "&:hover": {
                                background:" rgba(51, 188, 126, 0.12)", 
                                boxShadow: "none",
                            } }}
                            startIcon={AddIcon("24", "24", "#2EA871")}
                        >
                          Custom fields
                        </Button>

                    </Stack>

                </Stack>

                {/* values below togglebutton */}               
                <Stack >
                
                    {
                        (details) ? (
                            details.map((ContactDetails)=> {
                                return(
                                    <Stack  key={ContactDetails.id} padding="8px 16px">
                                        <Paper variant="outlined"  sx={{ borderRadius: "8px", padding:"8px" }}>
                                            <Stack direction="row">

                                                <Stack direction="row" width="60%" spacing={2} alignItems="center">
                                                    <Stack 
                                                        sx={{
                                                            paddingLeft :"16px",
                                                            "&:hover":{
                                                                cursor:"pointer"
                                                            }
                                                        }}
                                                    >
                                                        {Drag("24","24","#808080")}
                                                    </Stack>
                                                
                                                    <Typography>
                                                        {ContactDetails.fieldName}
                                                    </Typography>
                                                    <Typography 
                                                        sx={{
                                                            background:" rgba(51, 188, 126, 0.12)",
                                                            padding : "2px 8px", 
                                                            borderRadius: "8px"
                                                        }}
                                                        fontSize= "13px" 
                                                    >
                                                        Text
                                                    </Typography>
                                                </Stack>
                                           
                                                <Container>
                                                    <Stack 
                                                        direction="row" 
                                                        alignItems="center"
                                                    >

                                                        <Stack
                                                            direction="row" 
                                                            alignItems="center"
                                                            width="25%"
                                                        >
                                                            <Checkbox/>
                                                            <Typography>Add View</Typography>
                                                        </Stack>
                                                
                                                        <Stack
                                                            direction="row" 
                                                            alignItems="center">
                                                            <Checkbox/>
                                                            <Typography>Required</Typography>
                                                        </Stack>
                                                
                                                     </Stack>
                                                </Container>
                                            
                                            </Stack>
                                         </Paper>
                                    </Stack>
                                )
                            })
                        ) : (null)
                    }
                </Stack>

            </ThemeProvider>
        </Box>
    )
}

export default Content;