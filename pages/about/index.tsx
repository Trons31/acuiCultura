import NextLink from 'next/link';
import { NextPage } from 'next'
import Image from 'next/image';

import React from 'react'
import { Layout} from '../../components/layout'
import { Banner, Main, MainPost, Navbar } from '../../components/ui'
import { Element } from 'react-scroll';
import Home from '../index';
import { Box, Divider, Grid, Typography,Link,Button, Card, CardMedia } from '@mui/material';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';

const sections = [
  { id: 'section-1', label: 'INICIO' },
  { id: 'section-2', label: 'NOSOTROS' },
  { id: 'section-3', label: 'PRODUCTOS' },
  { id: 'section-4', label: 'ASESORIAS' },
  { id: 'section-5', label: 'CONTACTO' },
];


const AboutPage: NextPage = () => {
  return (
     <Layout sections={sections} isMainPage={false} title='¿Quienes somos?' pageDescription='Conoce todo acerca de avicultivos la fe, quienes somos, nuestras instalaciones y procesos en la piscicultura'  >
       
       <MainPost 
        description='lo que sea'
        image='slide.jpg'
        imageText='venta de pescado'
        linkText='ver mas'
        marginTop={0}
        marginBotton={1}
        height={300}
        title={'ACUICULTIVOS LA FE'} />

       <Main>
       
  
       <Grid container spacing={2} alignItems="center" >

          <Grid item xs={12} sm={6} >
             <Card sx={{ borderRadius: 1 }} >
                <CardMedia
                  component="img"
                  height="300"
                  image="/about/somos.png"
                  alt="Paella dish"
                />
             </Card>
          </Grid>


          <Grid item xs={12} sm={6} >
            <Box mt={0}>
                
                <Box display="flex" textAlign='center' >
                <Typography textAlign="center" fontSize={40} >¿QUIENES SOMOS?</Typography>
                </Box>
                
                <Box mt={3} sx={{ borderLeft: '4px solid red', padding: '10px 10px' }} >
                ACUACULTIVOS LA FE S.A.S. es una empresa que se dedica a la cría, levante y engorde de tilapias como principal actividad económica, así como también ofrece Consultoría de proyectos para la adquisición de recursos, servicio técnico personalizado, asesoría y capacitación en temas claves para el buen desarrollo de la especie a cultivar alcanzando una buena relación costo-beneficio. 
                Equipos para el control de parámetros fisicoquímicos del agua, sistemas de aireación, redes para piscicultura y alevinos.

                </Box>

                  <Box display='flex' mt={1} borderRadius={2} padding={2} sx={{ background: '#0d47a1' }} >
                      <SetMealOutlinedIcon sx={{ color: '#fff', mr:2 }} />
                    <Typography sx={{ color: '#efebe9' }} >Mision - Porteger y cuidar la calidad en la produccion de nuestros peces</Typography>
                </Box>
            </Box>
          </Grid>

       </Grid>

       </Main>

       <Banner
        titleBanner='Productos y servicios' 
        description='Conoce cada uno de nuestros productos y servicios '
        linkPage='/'
        textButton='Visitar ahora' 
        />

     </Layout>
  )
}

export default AboutPage