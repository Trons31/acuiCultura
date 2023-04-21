import { FC, useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {Paper,Typography,Grid,Link,Box ,Button} from '@mui/material/';


export const Respaldator = () => {
  
     const [isLoadImage, setIsLoadImage] = useState(false)
  
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        width: '100',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(/slide.jpg)`,
      }}
    >
      {  <Image style={{ display: 'none' }} src={`/about/slide.jpg`} alt={"Imagen del Texto"} width='100%' height='100%'
      onLoad={() => setIsLoadImage(true)}
      /> }
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.6)',
        }}
        className='fadeIn'
      />
      <Grid container justifyContent='center' >
        <Grid item md={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 0 },
              pr: { md: 0 },
              
            }}
            alignItems="center"
            textAlign="center"
            marginTop={0}
            marginBottom={0}
          >

           <Grid container spacing={2}>

            <Grid item xs={6} sm={4}>
               <Box>
                  <Image src="/logos/finagro.jpg" height={150} width={450} />
               </Box>
            </Grid>
              
           </Grid>
      
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}