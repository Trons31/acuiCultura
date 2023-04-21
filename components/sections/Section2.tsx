import * as React from 'react';
import Image from 'next/image';
import { Box, Card, CardMedia, Divider, Grid, Typography } from '@mui/material'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';


export const Section2 = () => {
  return (
    <>
      <Box display='flex' justifyContent='center' alignItems='center' >

        <Box>
          <Typography variant='h1' color='#333333' sx={{ fontSize: { xs: 24, sm: 35 } }} >ALGO SOBRE NOSOTROS </Typography>
          <Box display='flex' justifyContent='center' >
            <Divider  sx={{ width: '25%', heigth: '2px', background: 'red' }} />
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2} mt={5} mb={5} >

      <Grid item xs={12} sm={6} >

      <Box>
            <Box mt={3} sx={{ borderLeft: '4px solid red', padding: '10px 10px' }} >
              <Typography fontWeight={400} fontSize={18}>
                ACUACULTIVOS LA FE S.A.S. es una empresa que se dedica a la cría, levante y engorde de tilapias como principal actividad económica, así como también ofrece Consultoría de proyectos para la adquisición de recursos, servicio técnico personalizado, asesoría y capacitación en temas claves para el buen desarrollo de la especie a cultivar alcanzando una buena relación costo-beneficio. 
              Equipos para el control de parámetros fisicoquímicos del agua, sistemas de aireación, redes para piscicultura y alevinos.
              </Typography>
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
             <strong style={{ color: 'red' }} >ACUICULTIVOS LA FE </strong> ES UNA EMPRESA CREADA PARA OFRECER DIFERENTES HERRAMIENTAS PARA EL SECTOR     PISCÍCOLA, CLAVES EN EL ÉXITO DE SU NEGOCIO.
         </Typography>
      </Box>

    </>
  )
}

