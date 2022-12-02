import React from "react";
import { List, ListItem, Stack} from "@mui/material";
import { twozo, profileImage  } from "../../assets/images";
import Deals from "../../assets/icons/deals";
import Contact from "../../assets/icons/contact";
import Company from "../../assets/icons/company";
import Product from "../../assets/icons/product";
import Settings from "../../assets/icons/settings";

function SideNavBar() {
  const images = [
    {
      name : Deals,
    },
    {
      name : Contact,
    },
    {
      name : Company,
    },
    {
      name : Product,
    },
    {
      name : Settings,
    },
  ];
    
  return(
    <Stack  
      bgcolor='#272937' 
      sx={{
        width: 60, 
        height: "100vh",
        alignItems: 'center', 
        display: 'flex'
      }} 
    >
      
      <Stack sx={{ width: 85, paddingTop: "8px"}}>
        <img alt="logo" src={twozo}/>
      </Stack>
      
      <Stack padding="8px 4px">
        {
          images.map((icon, index) => {
            return(
              <Stack key={index} padding="4px">
                <List>
                  <ListItem>
                  {icon.name(24,24,"#FFFFFF")}
                  </ListItem>
                </List>
              </Stack>
            ) 
          })
        }
      </Stack>

      <Stack sx={{ position:"fixed", bottom:0 , padding: "8px"}} >
        <img 
          alt="profile" 
          src={profileImage} 
          style={{ width: 28, height: 28 , borderRadius: "50%"}}
        />
      </Stack>
      
    </Stack>
  )
}

export default SideNavBar;