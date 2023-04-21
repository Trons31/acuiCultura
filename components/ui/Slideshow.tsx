import { useState, useEffect, FC } from "react";
import NextLink from 'next/link';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import  style  from './SlideShowIndex.module.css';
import { Box, Button, Grid, Link, Typography } from '@mui/material';

const slideImages = [
  {
    title: "ACUICULTIVOS LA FE",
    image: "slide1.png",
    text: "PRODUCTORES EN ALTA CALIDAD",
    buttonLink: "/slide1",
    buttonText: "/about",
  },
  {
    title: "TECNOLOGIA DE VANGUARDIA",
    image: "slide2.png",
    text: "MEJORA LA CALIDAD EN LA PRODUCCION",
    buttonLink: "/about/processInstallations",
    buttonText: "Ver más",
  },
  {
    title: 'ACCEDA A NUESTRAS ASESORIAS',
    image: "slide3.png",
    text: "TE AYUDAMOS A CRECER COMO PRODUCTOR",
    buttonLink: "/consultancies",
    buttonText: "Ver más",
  },
];


export const Slideshow:FC = () => {
  return (
    <Slide
     easing='ease'
     duration={7000}
    >
     {
     
     slideImages.map((slideImage)=> (
            <div 
            className={ style['slide-show'] }
            key={slideImage.image}
            >
              <div 
              style={{backgroundImage: `url(/slide/${slideImage.image})`,
              backgroundSize: 'cover',
              }}>

                   <Box
                    width="100%" 
                    display='flex'
                    justifyContent="center"
                    alignItems="center"
                    mt={9}
                    >
                      <Box  >
                          <Box textAlign="center" sx={{ background: '#f57c00', padding: '15px 20px',width: "100%"   }}>
                                <Typography sx={{ fontSize:{ xs: 25, sm: 75 } }} variant='h6' component='h6' color='white' > {slideImage.title} </Typography>
                          </Box>

                            <Grid container  >
                                <Grid item xs={12} sm={12} md={12} >
                                      <Box sx={{ ml:5, mr:3 }} textAlign="center" >
                                      
                                      <Box sx={{ background: 'rgba(0, 0, 0, 0.7)', padding: '10px 20px' }} >
                                        <Typography color='white' sx={{ mt: 2,fontSize:{ xs: 25, sm: 60 } }} >                       
                                          { slideImage.text  }
                                        </Typography>
                                      </Box>
                                      

                                      <NextLink href={slideImage.buttonLink} passHref>
                                        <Link>
                                          <Button sx={{ mt: 5}} color="secondary" size="large" >
                                            ver mas
                                          </Button>
                                        </Link>
                                      </NextLink>
                                      
                                  </Box>
                                </Grid>
                            </Grid>
                      </Box>
                        
                     </Box>
              </div>
            </div>
          ))}
   </Slide>

  );
};

