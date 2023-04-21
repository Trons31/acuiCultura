import { FC, useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {Paper,Typography,Grid,Link,Box ,Button} from '@mui/material/';



interface Props {
    title?: string;
    description?: string;
    image?: string;
    imageText?: string;
    linkText?: string;
    height?: number;
    marginTop?: number;
    marginBotton?: number;
    isBannerTextColor?: boolean;
    colorTextBanner?: string;
    isBannerTitleWithColor?: boolean;
    colorTitleBanner?: string
}

export const MainPost:FC<Props> = ({description, image,imageText,linkText,marginTop,marginBotton, height, title,isBannerTextColor,colorTextBanner,isBannerTitleWithColor,colorTitleBanner}) => {
  
     const [isLoadImage, setIsLoadImage] = useState(false)
  
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        width: '100',
        height: { height },
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(/${image})`,
      }}
    >
      {  <Image style={{ display: 'none' }} src={`/public/${image}`} alt={imageText} width='100%' height='100%'
      onLoad={() => setIsLoadImage(true)}
      /> }
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
        }}
        className='fadeIn'
      />
      <Grid container justifyContent='center' >
        <Grid item md={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: '10px 20px', md: 0 },
              pr: { md: 0 },
              mt:{xs: 0, md:0 }
              
            }}
            alignItems="center"
            marginTop={marginTop}
            marginBottom={3}
          >

           <Box display='flex' justifyContent='start' sx={{ padding:{ xs: '0px 0px', sm: '0px 30px' } }} >
           <Typography  className='fadeIn' sx={{ fontSize: { xs: 23, sm:55 } }}  fontWeight={600} >
             { title }
            </Typography>
           </Box>
            
            {
              isBannerTextColor 
              ?(
                <>
                <Box sx={{ backgroundColor: colorTextBanner , padding:{ xs: "0px 0px", sm:"20px 30px" } }} >
                  <Typography sx={{ fontSize: { xs: 20, sm:45 } }}  fontWeight={300} color="black" >
                    {description!.toUpperCase() }
                  </Typography>
                </Box>
                </>
              ):(
                <>
                <Box sx={{ backgroundColor: colorTextBanner , padding:{ xs: "0px 0px", sm:"20px 30px" } }} >
                  <Typography sx={{ fontSize: { xs: 15, sm:25 } }} fontWeight={300} >
                    {description!.toUpperCase() }
                  </Typography>
                </Box>
                </>
              )
            }


          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}