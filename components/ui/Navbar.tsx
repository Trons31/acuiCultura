import NextLink from 'next/link';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { AppBar, Button, IconButton, Toolbar, Typography,Box, List, ListItem, ListItemText, Popover, ButtonGroup, ListItemButton,} from "@mui/material"

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {  useContext, useRef, useState } from 'react';
import { UiContext } from "../../contexts/ui";
import { Router, useRouter } from 'next/router';
import { FacebookOutlined } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

type Section = {
  id: string;
  label: string;
};

type AnchorMenuProps = {
  sections: Section[];
  isMainPage: boolean;
};

export const Navbar = ({ sections, isMainPage }: AnchorMenuProps) => {
  
  const {openMenu} = useContext(UiContext);
  const router = useRouter();
  const [isSection, setisSection] = useState("");

  const handleItemClick = (id: string) => {
    if (isMainPage) {
      setisSection(id);
      window.scrollTo({ top: document.getElementById(id)?.offsetTop ?? 0, behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  
  const anchorRef = useRef<HTMLDivElement>(null);


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <AppBar sx={{ height:{xs: "auto", sm : 75}}} >
    <Toolbar>

      <NextLink href='/' passHref >
          <Box display='flex' alignItems='center' style={{ cursor: 'pointer' }} >
            <Box sx={{ display:{ xs: "none", sm: "block"},  }}  >
              <Image src='/logoNav.png' width={70} height='70%' alt='logo aplication'  />
            </Box>
            <Box sx={{ display:{ xs: "block", sm: "none"} }} > 
              <Image src='/logoNav.png' width={50} height='50%' alt='logo aplication'  />
            </Box>
          <Box sx={{ display:{ xs: "none", sm: "block"} }} >
          <Typography color='black' fontWeight={700} sx={{ fontSize: 20 }} >ACUICULTIVOS </Typography>
          <Typography textAlign="center" color='#F89908' sx={{ fontSize: 14 }} fontWeight={700} >LA FE</Typography>
          </Box>

          <Box sx={{ display:{ xs: "block", sm: "none"} }} >
          <Typography color='black' fontWeight={700} sx={{ fontSize: 15 }} >ACUICULTIVOS </Typography>
          <Typography textAlign="center" color='#F89908' sx={{ fontSize: 10, mt: -1 }} fontWeight={700} >LA FE </Typography>
          </Box>
          </Box>
      </NextLink> 

        <Box flex={1} />
              <Box 
                mt={1}
                className='fadeIn'
                sx={{ display: { xs: 'none', sm: 'flex' }, alignItems:'center' }} 
                >
              
                {isMainPage ? (
                  <Link to={"section-1"}  spy={true} smooth={true} duration={500}>
                    <Button 
                    className={isSection === "section-1" ? "active" : ""} 
                    sx={{ fontSize: 15, ml:1, mr:1 }}  
                    onClick={() => handleItemClick("section-1")}
                    >
                      INICIO
                    </Button>
                  </Link>
                  
                  ) : (
                  <Button  
                   sx={{ fontSize: 15, ml:1, mr:1 }} 
                   onClick={() => handleItemClick("section-1")}>
                     INICIO
                  </Button>
                )}


                  <Box display="flex" alignItems="center" >
                  {isMainPage ? (
                    
                  <Link to={"section-2"}  spy={true} smooth={true} duration={500}>
                    <Button 
                    className={isSection === "section-2" ? "active" : ""} 
                    sx={{ fontSize: 15, ml:1, mr:1 }}  
                    onClick={() => handleItemClick("section-2")}
                    >
                     NOSOTROS
                    </Button>
                  </Link>
                  
                    ) : (
                  <Button  
                   sx={{ fontSize: 15, ml:1, mr:1 }} 
                   onClick={() => handleItemClick("section-2")}>
                     NOSOTROS
                  </Button>
                   )}

                <IconButton sx={{ ml:-1 }}  aria-describedby={id} onMouseOver={handleClick}
                >
                      <ArrowDropDownOutlinedIcon />
                    </IconButton>
                    </Box>

                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <List>
                        <NextLink href="/about" >
                          <ListItemButton onClick={handleClose}>
                            <ListItemText primary="¿Quienes somos?" />
                          </ListItemButton>
                        </NextLink>
                        
                        <ListItemButton  onClick={handleClose}>
                          <ListItemText primary="Mision y vision" />
                        </ListItemButton>
                        <ListItemButton onClick={handleClose}>
                          <ListItemText primary="Procesos e instalaciones" />
                        </ListItemButton>
                      </List>
                    </Popover>       

                  {isMainPage ? (

                  <Link to={"section-3"}  spy={true} smooth={true} duration={500}>
                    <Button 
                    className={isSection === "section-3" ? "active" : ""} 
                    sx={{ fontSize: 15, ml:1, mr:1 }}  
                    onClick={() => handleItemClick("section-3")}
                    >
                     PRODUCTOS
                    </Button>
                  </Link>
                 
                    ) : (
                  <Button  
                   sx={{ fontSize: 15, ml:1, mr:1 }} 
                   onClick={() => handleItemClick("section-3")}>
                     PRODUCTOS
                  </Button>
                   )}


                    {isMainPage ? (
                  <Link to={"section-4"}  spy={true} smooth={true} duration={500}>
                    <Button 
                    className={isSection === "section-4" ? "active" : ""} 
                    sx={{ fontSize: 15, ml:1, mr:1 }}  
                    onClick={() => handleItemClick("section-4")}
                    >
                     ASESORIAS
                    </Button>
                  </Link>
                  
                    ) : (
                  <Button  
                   sx={{ fontSize: 15, ml:1, mr:1 }} 
                   onClick={() => handleItemClick("section-4")}>
                    ASESORIAS
                  </Button>
                   )}

                  {isMainPage ? (
                  <Link to={"section-5"}  spy={true} smooth={true} duration={500}>
                    <Button 
                    className={isSection === "section-5" ? "active" : ""} 
                    sx={{ fontSize: 15, ml:1, mr:1 }}  
                    onClick={() => handleItemClick("section-5")}
                    >
                     CONTACTO
                    </Button>
                  </Link>
                  
                    ) : (
                  <Button  
                   sx={{ fontSize: 15, ml:1, mr:1 }} 
                   onClick={() => handleItemClick("section-5")}>
                    CONTACTO
                  </Button>
                   )}
           
          
           </Box>
          <Box flex={1} />


         <Box sx={{ display:{ xs: 'none', sm: 'flex' } }} >
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
            
         <Box mt={2} >
          <IconButton onClick={openMenu} sx={{ display: { xs: 'block', sm: 'none' } }} >
              <MenuOutlinedIcon sx={{ fontSize: "30px" }} />
          </IconButton>
         </Box>
          
        </Toolbar>
    </AppBar>
  );
};

