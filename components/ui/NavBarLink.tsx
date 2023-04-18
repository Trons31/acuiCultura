import NextLink from 'next/link';
import Image from 'next/image';
import { Link } from "react-scroll";

import { AppBar, Button, IconButton, Toolbar, Typography,Box, List, ListItem, ListItemText, Popover, ButtonGroup, ListItemButton,} from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { FC, useContext, useEffect, useState } from 'react';
import { UiContext } from "../../contexts/ui";
import { Router, useRouter } from 'next/router';
import { FacebookOutlined } from '@mui/icons-material';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';


export const Navbar = () => {

    const {openMenu} = useContext(UiContext)
    const {asPath, push, replace} = useRouter();
   const router = useRouter();

    const [activeSection, setActiveSection] = useState("");
    const [isSection, setisSection] = useState("")
    const [isIndex, setisIndex] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY;
  
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
  
          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionBottom - 100
          ) {
            setActiveSection(section.id);
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);



    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    console.log(asPath);

   

  return (
    <AppBar sx={{ height:{xs: "auto", sm : 75}}} >
        <Toolbar>
        <NextLink href='/' passHref >
                <Box display='flex' alignItems='center' >
                  <Box sx={{ display:{ xs: "none", sm: "block"} }}>
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
          
             {
                asPath === "/"
                ?(
                  <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  >
                    <Button className={activeSection === "section1" ? "active" : ""} sx={{ fontSize: 15, ml:1, mr:1 }}  >
                      INICIO
                    </Button>
                  </Link>
                )
                :(
                  <NextLink href="/#section1" >
                    <Button className={activeSection === "section1" ? "active" : ""} sx={{ fontSize: 15, ml:1, mr:1 }}  >
                      INICIO
                    </Button>
                  </NextLink>
                )
             }
               
           

            <Box display="flex" alignItems="center" >
              {
                asPath === "/"
                ?(
                  <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  
                  >
                  <Button  
                  className={activeSection === "section2" ? "active" : ""}  
                  sx={{ fontSize: 15, ml:1, }}
                  >
                     NOSOTROS
                  </Button>
                 </Link>
                )
                :(
                  <NextLink href="/#section2" >
                     <Button  
                      className={activeSection === "section2" ? "active" : ""}  
                      sx={{ fontSize: 15, ml:1, }}
                      >
                        NOSOTROS
                      </Button>
                  </NextLink>
                )
              }
        
            
            <IconButton sx={{ ml:-1 }}  aria-describedby={id} onMouseOver={handleClick}>
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

              {
                asPath === "/"
                ?(
                  <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  
                 >
                  <Button 
                  className={activeSection === "section3" ? "active" : ""}
                  sx={{ fontSize: 15, ml:1, mr:1 }} 
                  >
                    PRODUCTOS Y SERVICIOS
                  </Button>
                 </Link>
                )
                :(
                   <NextLink href="/#section3" >
                      <Button className={activeSection === "section3" ? "active" : ""}sx={{ fontSize: 15, ml:1, mr:1 }} >
                        PRODUCTOS Y SERVICIOS
                      </Button>
                   </NextLink>
                )
              }  

           
            
            {
              asPath === "/" 
              ?(
                 <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  >
                  <Button  className={activeSection === "section4" ? "active" : ""} sx={{ fontSize: 15, ml:1, mr:1 }} >
                    ASESORIAS
                  </Button>
                </Link>
              )
              :(
              
                  <Button  
                  className={activeSection === "section4" ? "active" : ""} 
                  sx={{ fontSize: 15, ml:1, mr:1 }}
                  >
                  ASESORIAS
                </Button> 
               
              )
            }
                

           {
             asPath === "/"
             ?(
              <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
             
             >
               <Button  
               className={activeSection === "section5" ? "active" : ""} 
               sx={{ fontSize: 15, ml:1, mr:1 }} 

               >
                CONTACTO
               </Button>
             </Link>
             ) 
             :(
                <NextLink href="/#section5" >
                   <Button  className={activeSection === "section5" ? "active" : ""} sx={{ fontSize: 15, ml:1, mr:1 }} >
                    CONTACTO
                  </Button>
                </NextLink>
             )
           }
           
         

          </Box>


          <Box flex={1} />


          <NextLink href="/cart" passHref >
            <IconButton sx={{ display: { xs: 'none', sm: 'block' } }}  >
               <FacebookOutlined sx={{ fontSize: '30px' }} />
            </IconButton>
          </NextLink>
            
         <Box mt={2} >
          <Button onClick={openMenu} sx={{ display: { xs: 'block', sm: 'none' } }} >
              <MenuOutlinedIcon sx={{ fontSize: "30px" }} />
          </Button>
         </Box>
          
        </Toolbar>
    </AppBar>
  )
}
