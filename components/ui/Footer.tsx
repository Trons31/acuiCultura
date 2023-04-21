import React from 'react'
import NextLink from "next/link"
import { Box, Button, IconButton, Typography } from '@mui/material'

import { FacebookOutlined } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {
  return (
    <>
      
      <Box display="flex" alignItems="center" sx={{ padding: "0px 80px" }} >
          <Box>
             <Typography fontSize={15}  fontWeight={500}   >Daniel Devps</Typography>
          </Box>
          <Box flex={1} />
          <Box>
                <NextLink href='' passHref >
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

          <Box flex={1} />

          <Button>
             Politicas 
          </Button>
           
          <Button>
             Terminos y servicios
          </Button>

      </Box>

    </>
  )
}
