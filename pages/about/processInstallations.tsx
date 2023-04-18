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


const ProcessAndInstallationsPage:NextPage = () => {
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
            <Card sx={{ borderRadius: 1 }} >
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
                
                <Box mt={3} sx={{ borderLeft: '4px solid red', padding: '10px 10px' }} >
                ACUACULTIVOS LA FE S.A.S. es una empresa productora de carne de pescado a nivel local y Nacional comprometida a contribuir con el crecimiento sostenible y económico del departamento de Córdoba, que aprovecha los recursos naturales para generar un producto nutritivo de calidad, aplicando las Buenas Practicas de Producción Acuícola para lograr la mayor satisfacción de nuestros clientes, comprometidos socialmente con el medio ambiente y el desarrollo del talento humano a través de la generación de empleo y contribuir a la parte alimenticia de la población.
                </Box>

            </Box>
        </Grid>

        <Grid item xs={12} sm={12} mt={4} >
             <Typography fontSize={30} fontWeight={900} >Proceso de produccion</Typography>

             <Typography sx={{ color: '#757575', mt:2 }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consequuntur ut explicabo est, aliquam tenetur pariatur aliquid non accusantium dolore, quaerat possimus delectus, illo sed magni doloremque repudiandae obcaecati. Recusandae, adipisci alias. Facilis, velit laborum. Voluptatem dolore modi animi, nostrum, error est earum cum, sapiente quas ab ipsum accusantium alias magnam labore. Laudantium suscipit fugit eveniet! Necessitatibus impedit libero culpa omnis, asperiores illum? Inventore fugit ullam assumenda porro magni aliquid. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat vel accusamus consectetur deserunt dicta repudiandae, vitae officia et quisquam facere excepturi pariatur adipisci tenetur modi quasi iure porro! Officiis, dolorum! </Typography>

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

export default ProcessAndInstallationsPage;