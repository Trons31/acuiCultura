import NextLink from 'next/link';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { AppBar, Button, IconButton, Toolbar, Typography,Box, List, ListItem, ListItemText, Popover, ButtonGroup, ListItemButton,} from "@mui/material"

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {  useContext, useState } from 'react';
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
          <Typography textAlign="center" color='#F89908' sx={{ fontSize: 14 }} fontWeight={700} >Acuicultura.co</Typography>
          </Box>

          <Box sx={{ display:{ xs: "block", sm: "none"} }} >
          <Typography color='black' fontWeight={700} sx={{ fontSize: 15 }} >ACUICULTIVOS </Typography>
          <Typography textAlign="center" color='#F89908' sx={{ fontSize: 10, mt: -1 }} fontWeight={700} >Acuicultura.co</Typography>
          </Box>
          </Box>
      </NextLink> 

        <Box flex={1} />
              <Box 
                mt={1}
                className='fadeIn'
                sx={{ display: { xs: 'none', sm: 'flex' }, alignItems:'center' }} 
                >
              {sections.map((section) => (
                <>
                {isMainPage ? (
                  <Link to={section.id} key={ section.id + section.label } spy={true} smooth={true} duration={500}>
                    <Button 
                    className={isSection === section.id ? "active" : ""} 
                    sx={{ fontSize: 15, ml:1, mr:1 }}  
                    onClick={() => handleItemClick(section.id)}
                    >
                      {section.label}
                    </Button>
                  </Link>
                ) : (
                  <Button key={ section.id + section.label } 
                   sx={{ fontSize: 15, ml:1, mr:1 }} 
                   onClick={() => handleItemClick(section.id)}>
                    {section.label}
                  </Button>
                )}
            </>
            ))}
            
            <NextLink href="/about" >
                     <Button  
                      className={router.asPath === "/about" ? "active" : ""}  
                      sx={{ fontSize: 15, ml:1, }}
                      >
                        NOSOTROS
                      </Button>
             </NextLink>

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

