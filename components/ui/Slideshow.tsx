import { useState, useEffect, FC } from "react";
import NextLink from 'next/link';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import  style  from './SlideShowIndex.module.css';
import { Box, Button, Grid, Link, Typography } from '@mui/material';

const slideImages = [
  {
    image: "slide1.png",
    text: "Slide 1",
    buttonLink: "/slide1",
    buttonText: "Ver más",
  },
  {
    image: "slide2.png",
    text: "Slide 2",
    buttonLink: "/slide2",
    buttonText: "Ver más",
  },
  {
    image: "slide3.png",
    text: "Slide 3",
    buttonLink: "/slide3",
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
                    alignItems="center">
                      <Box>
                        <Box sx={{ display:{ sx: 'block', sm: 'flex' } }} textAlign="center" alignItems="center" >
                                <Typography sx={{ fontSize:{ xs: 25, sm: 60 } }} variant='h6' component='h6' color='white' > ALTA CALIDA</Typography>
                                <Typography sx={{ fontSize:{ xs: 35, sm: 60 },ml:2 }} color='yellow' > ACUICULTIVOS LA FE </Typography>
                          </Box>
                            <Grid container  >
                                <Grid item xs={12} sm={12} md={12} >
                                      <Box sx={{ ml:5, mr:3 }} >
                                    
                                      <Typography color='white' sx={{ my: 1}} >                       
                                        { slideImage.text  }
                                      </Typography>

                                      <NextLink href={slideImage.buttonLink} passHref>
                                        <Link>
                                          <Button color="secondary" >
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

