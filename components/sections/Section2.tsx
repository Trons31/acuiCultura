import * as React from 'react';
import Image from 'next/image';
import { Box, Card, CardMedia, Divider, Grid, Typography } from '@mui/material'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';


export const Section2 = () => {
  return (
    <>
      <Box display='flex' justifyContent='center' alignItems='center' >

        <Box>
          <Typography variant='h1' color='#333333' fontSize='35px' >ALGO SOBRE NOSOTROS </Typography>
          <Box display='flex' justifyContent='center' >
            <Divider  sx={{ width: '25%', heigth: '2px', background: 'red' }} />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2} mt={5} mb={5} >

      <Grid item xs={12} sm={6} >

      <Box>

        <Box display="flex" ml={2} >
            <Typography textAlign="center" fontSize={20} >MISION</Typography>
            </Box>
            
            <Box mt={3} sx={{ borderLeft: '4px solid red', padding: '10px 10px' }} >
            ACUACULTIVOS LA FE S.A.S. es una empresa productora de carne de pescado a nivel local y Nacional comprometida a contribuir con el crecimiento sostenible y económico del departamento de Córdoba, que aprovecha los recursos naturales para generar un producto nutritivo de calidad, aplicando las Buenas Practicas de Producción Acuícola para lograr la mayor satisfacción de nuestros clientes, comprometidos socialmente con el medio ambiente y el desarrollo del talento humano a través de la generación de empleo y contribuir a la parte alimenticia de la población.
            </Box>
        </Box>
        </Grid>


        <Grid item xs={12} sm={6} >
          <Card sx={{ borderRadius: 4, border: '7px solid #e0e0e0' }} >
                  <CardMedia
                  component="img"
                  height="300"
                  image="/image.png"
                  alt="Paella dish"
                  />
              </Card>
        </Grid>
      </Grid>

      <Box textAlign="center" mb={15}>
         <Typography fontSize={25}  fontWeight={600} sx={{ color: '#424242' }}  >
             <span style={{ color: 'red' }} >ACUICULTIVOS LA FE </span> ES UNA EMPRESA CREADA PARA OFRECER DIFERENTES HERRAMIENTAS PARA EL SECTOR     PISCÍCOLA, CLAVES EN EL ÉXITO DE SU NEGOCIO.
         </Typography>
      </Box>

    </>
  )
}

