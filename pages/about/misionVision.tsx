import NextLink from 'next/link';
import { NextPage } from 'next'

import React from 'react'
import { Layout} from '../../components/layout'
import { Banner, Main, MainPost } from '../../components/ui'
import { Box,  Grid, Typography,Link,Button, Card, CardMedia } from '@mui/material';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';

const sections = [
  { id: 'section-1', label: 'INICIO' },
  { id: 'section-2', label: 'NOSOTROS' },
  { id: 'section-3', label: 'PRODUCTOS' },
  { id: 'section-4', label: 'ASESORIAS' },
  { id: 'section-5', label: 'CONTACTO' },
];


const MisionAndVisionPage:NextPage = () => {
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
        title={'ACUICULTIVOS LA FE'} 
        isBannerTextColor={false} 
        colorTextBanner={''} 
        isBannerTitleWithColor={false} 
        colorTitleBanner={''} />

        <Main>
        

        <Grid container spacing={2} alignItems="center" >

        <Grid item xs={12} sm={6} >
            <Card sx={{ borderRadius: 4, border: '7px solid #e0e0e0' }}>
                <CardMedia
                component="img"
                height="300"
                image="somos.png"
                alt="Paella dish"
                />
            </Card>
        </Grid>


        <Grid item xs={12} sm={6} >
            <Box mt={0}>

            <Box display="flex" ml={2} >
                <Typography textAlign="center" fontSize={40} >MISION</Typography>
                </Box>
                
                <Box mt={3} sx={{ borderLeft: '4px solid red', padding: '10px 10px' }} >
                ACUACULTIVOS LA FE S.A.S. es una empresa productora de carne de pescado a nivel local y Nacional comprometida a contribuir con el crecimiento sostenible y económico del departamento de Córdoba, que aprovecha los recursos naturales para generar un producto nutritivo de calidad, aplicando las Buenas Practicas de Producción Acuícola para lograr la mayor satisfacción de nuestros clientes, comprometidos socialmente con el medio ambiente y el desarrollo del talento humano a través de la generación de empleo y contribuir a la parte alimenticia de la población.
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

        <Main>
        
        <Grid container spacing={2} alignItems="center" >

        <Grid item xs={12} sm={6} >
            <Box mt={0}>

            <Box display="flex" ml={2} >
                <Typography textAlign="center" fontSize={40} >VISION</Typography>
                </Box>
                
                <Box mt={3} sx={{ borderLeft: '4px solid red', padding: '10px 10px' }} >
                Ser la empresa líder en producción y comercialización de carne de pescado en diferentes presentaciones, reconocida y posicionada en el mercado nacional con políticas responsables en el impacto del medio ambiente y su desarrollo, consolidando el talento humano presente en la operación de la empresa.
                </Box>

                <Box display='flex' mt={1} borderRadius={2} padding={2} sx={{ background: '#0d47a1' }} >
                    <SetMealOutlinedIcon sx={{ color: '#fff', mr:2 }} />
                    <Typography sx={{ color: '#efebe9' }} >VISION - Porteger y cuidar la calidad en la produccion de nuestros peces</Typography>
                </Box>
            </Box>
        </Grid>    

        <Grid item xs={12} sm={6} >
            <Card sx={{ borderRadius: 4, border: '7px solid #e0e0e0' }}>
                <CardMedia
                component="img"
                height="300"
                image="somos.png"
                alt="Paella dish"
                />
            </Card>
        </Grid>

        </Grid>

        </Main>

    </Layout>
  )
}

export default MisionAndVisionPage