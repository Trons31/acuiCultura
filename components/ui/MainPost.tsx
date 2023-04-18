import { FC } from 'react';
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
  

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        width: '100',
        height: { height },
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(/${image})`,
      }}
    >
      {  <Image style={{ display: 'none' }} src={`/public/${image}`} alt={imageText} width='100%' height='100%' /> }
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.6)',
        }}
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
            marginTop={marginTop}
            marginBottom={marginBotton}
          >

           <Box display='flex' justifyContent='center' alignItems='center' >
           <Typography  component="h1" variant="h3" color="inherit" gutterBottom>
             { title }
            </Typography>
            <Typography color="#F8C508" variant="h5" >
              </Typography>
           </Box>
            
            {
              isBannerTextColor &&
              (
                <>
                <Box sx={{ backgroundColor: colorTextBanner , padding:{ xs: "0px 0px", sm:"20px 30px" } }} >
                  <Typography  sx={{ fontSize: { xs: 25, sm:45 } }} fontWeight={300} color="black" variant="h5" paragraph >
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