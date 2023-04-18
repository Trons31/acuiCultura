import React, { FC } from 'react'
import NextLink from 'next/link';
import { Box, Button, Grid, Link, Typography } from '@mui/material';

interface Props{
    titleBanner: string;
    description: string;
    linkPage: string
    textButton: string;
}

export const Banner:FC<Props> = ({  titleBanner,description,linkPage,textButton }) => {
  return (

    <Box display='flex' mt={5} sx={{ paddingX:{ xs: 2, sm: 20 },background: '#007749'}} paddingY={5}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={9} >
        <Typography variant='h1' component='h1' sx={{ color: '#fff' }} >{ titleBanner } </Typography>
        <Typography sx={{ fontSize: 17, color: '#fff', mt: 2, fontWeight: 400 }} >{ description }</Typography>
        </Grid>

            <Grid item xs={12} sm={3} textAlign='center' sx={{ mt:{ xs: 2, sm: 8 } }} >
            <NextLink href={linkPage} passHref > 
                <Link>
                    <Button className='btn-about'  size='large' >
                     {textButton}
                    </Button>
                </Link>
            </NextLink>
            </Grid>
        </Grid>
    </Box>

  )
}
