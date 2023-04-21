import NextLink from 'next/link';
import { Box,  Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useContext} from "react";
import { UiContext } from "../../contexts/ui";
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

import { FacebookOutlined } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {  Link } from "react-scroll";


type AnchorMenuProps = {
  isMainPage: boolean;
};

export const Sidebar = ({ isMainPage }: AnchorMenuProps) => {

  const {sidebarMenuOpen, closeMenu} = useContext(UiContext);

  const handleItemClick = (id: string) => {
    if (isMainPage) {
      closeMenu();
      window.scrollTo({ top: document.getElementById(id)?.offsetTop ?? 0, behavior: 'smooth' });
    } else {
      closeMenu();
      window.location.href = `/#${id}`;
    }
  };

  


  return (
    <Drawer
    open={sidebarMenuOpen}
    anchor='right'
    onClose={closeMenu}
    sx={{ backdropFilter: 'blur(4px)' }}
    >
        <Box 
        sx={{ width: '250px', marginTop: 2 }}
        >
          <List>
            
            <Box 
            sx={{ display: { xs: '', md:'none' } }}
            >
               
            <Typography 
            variant='h6' 
            fontWeight={600} 
            fontSize='14px' 
            marginLeft={2}
            marginTop={1}
            >
            Menu 
            </Typography>



              {isMainPage ? (
              <Link to={'section-1'}  spy={true} smooth={true} duration={500}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleItemClick("section-1")}>
                    <ListItemIcon>
                          <HomeOutlinedIcon/>
                      </ListItemIcon>
                      <ListItemText primary={'Inicio'} />
                  </ListItemButton>
                </ListItem>
              </Link>

            ) : (
              <ListItem disablePadding>
              <ListItemButton  onClick={() => handleItemClick("section-1")}>
                <ListItemIcon>
                      <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Inicio'} />
              </ListItemButton>
            </ListItem>
              )}

              {isMainPage ? (
                <Link to={'section-2'}  spy={true} smooth={true} duration={500}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleItemClick("section-2")} >
                      <ListItemIcon>
                            <GroupsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Nosotros'} />
                    </ListItemButton>
                  </ListItem>
             </Link>

            ) : (
              <ListItem disablePadding>
              <ListItemButton onClick={() => handleItemClick("section-2")} >
                <ListItemIcon>
                      <GroupsOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'Nosotros'} />
              </ListItemButton>
            </ListItem>
              )}

            {isMainPage ? (
               <Link to={'section-3'}  spy={true} smooth={true} duration={500}>
                <ListItem disablePadding>
                  <ListItemButton  onClick={() => handleItemClick("section-3")}>
                    <ListItemIcon>
                          <StoreMallDirectoryOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={'Productos'} />
                  </ListItemButton>
                </ListItem>
            </Link>

            ) : (
              <ListItem disablePadding>
              <ListItemButton onClick={() => handleItemClick("section-3")} >
                <ListItemIcon>
                      <StoreMallDirectoryOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Productos'} />
              </ListItemButton>
            </ListItem>
              )}

            {isMainPage ? (
              <Link to={'section-4'}  spy={true} smooth={true} duration={500}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleItemClick("section-3")}>
                    <ListItemIcon>
                          <CategoryOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={'Asesorias'} />
                  </ListItemButton>
                </ListItem>
            </Link>

            ) : (
              <ListItem disablePadding>
              <ListItemButton onClick={() => handleItemClick("section-3")} >
                <ListItemIcon>
                      <CategoryOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Asesorias'} />
              </ListItemButton>
            </ListItem>
              )}
            

        
            <Divider sx={{ marginTop:1 }} />

            </Box>

           
         <Box>
          <NextLink  href="/about" >
            <ListItemButton onClick={closeMenu} >
                    <ListItemIcon>
                        <LanguageOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Contacto'} />
            </ListItemButton>
          </NextLink>
           </Box>

         </List>
        </Box>

      
        
        <Box display="flex" padding="10px 20px" justifyContent="center"  >
           
              <NextLink href="/cart" passHref >
                <IconButton className="facebook" >
                  <FacebookOutlined sx={{ fontSize: '30px' }} />
                </IconButton>
              </NextLink>

              <NextLink href="/cart" passHref >
                <IconButton className="whatsapp" >
                  <WhatsAppIcon sx={{ fontSize: '30px' }} />
                </IconButton>
              </NextLink>

        </Box>

    </Drawer>
  )
}
