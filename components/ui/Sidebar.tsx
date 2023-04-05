import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { useContext } from "react";
import { UiContext } from "../../contexts/ui";


const menuItems: string[] = ['Home','About','Taks','Account']



export const Sidebar = () => {

  const {sidebarMenuOpen, closeMenu} = useContext(UiContext)

  return (
    <Drawer
    anchor="left"
    open={ sidebarMenuOpen  }
    onClose={ closeMenu }
    >

      <Box sx={{ width: 250 }} >
        <Box sx={{ padding: ' 5px 10px '  }} >
          <Typography variant="h4" > menu </Typography>
        </Box>

         <List>
         {
            menuItems.map((text, index) => (
           <ListItem >
         
              <ListItemIcon>
                {  index % 2 ? <HomeOutlinedIcon /> : <PermIdentityOutlinedIcon />   }
              </ListItemIcon>   
              <ListItemText>
                { text }  
               </ListItemText> 
         </ListItem>
         ) )
        }
        </List>

        <Divider />

        <List>
         {
            menuItems.map((text, index) => (
           <ListItem >
         
              <ListItemIcon>
                {  index % 2 ? <HomeOutlinedIcon /> : <PermIdentityOutlinedIcon />   }
              </ListItemIcon>   
              <ListItemText>
                { text }  
               </ListItemText> 
         </ListItem>
         ) )
        }
        </List>


      </Box>
        
    </Drawer>
  )
}
