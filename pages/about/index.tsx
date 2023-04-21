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
     <Layout sections={sections} isMainPage={false} isMainPageFooter={false} title='¿Quienes somos?' 
     pageDescription='Conoce todo acerca de acuicultivos la fe, quienes somos, nuestras instalaciones y procesos en la piscicultura'  >
       
       <MainPost 
        description='Con mas de dos años de experiencia en el mercado, ACUICULTIVOS LA FE, se ha caracterizado por su buen nombre siendo reconocida por la calidad del producto ofrecido.'
        image='slide.jpg'
        imageText='venta de pescado'
        linkText='ver mas'
        marginTop={0}
        marginBotton={1}
        height={300}
        title={'ACUICULTIVOS LA FE'} 
        />
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
                ACUACULTIVOS LA FE S.A.S. es una empresa que nació como una idea de negocios en el municipio de Lorica Córdoba en el año 2017 en la vereda el espinal, pero por motivos de adversidades naturales y de crecimiento se presentó la necesidad de mudarnos a otra vereda del mismo municipio de Lorica, llamada Rabo gacho Perteneciente al corregimiento de Mata de Caña, de fácil ubicación vía de Lorica a Montería pasando el peaje mata de caña primera entrada a mano derecha, a quinientos metros de la carretera negra, es una empresa que se formalizo con el apoyo del fondo emprender y sus aliados.

                </Box>

                  <Box display='flex' alignItems="center" mt={1} borderRadius={2} padding={2} sx={{ background: '#F89908' }} >
                      <SetMealOutlinedIcon sx={{ color: '#fff', mr:2 }} />
                    <Typography sx={{ color: '#efebe9' }} >TALENTO HUMANO - ACUACULTIVOS LA FE S.A.S. es una empresa que cuenta con personal capacitado y con experiencia en el área piscícola y de negocios afines. </Typography>
                </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} mt={4} >
             <Typography fontSize={30} fontWeight={900} ></Typography>

             <Typography sx={{ color: '#424242', mt:2 }} fontWeight={500} fontSize={18} > <span style={{ color: 'red' }} >ACUICULTIVOS LA FE </span>, es una empresa que se dedica al levante, engorde y comercializacion de carne de <span style={{ color: 'red' }} >Tilapia Roja </span>  al por mayor y al por menor, este producto se ofrece fresco, sin conservantes, posee excelente sabor, olor y color. <span style={{ color: 'red' }} >ACUICULTIVOS LA FE</span>  cultiva estos peces en tanques de geomenbrana, sistema de cubierta y ventanas en cada estanque, a travez de un sistema de oxigenacion mecanica con blower en las piscinas de alevinaje y en las piscinas de engorde, sistema hidraulico de drenaje, sistema de luz electrica y generador, sistema hidraulico de rio</Typography>

        </Grid>

       </Grid>

       </Main>

        <Banner
        titleBanner='ACUICULTURA SIMBIOTICA' 
        description='El principal beneficio de los simbioticos al productor, es que genera productividad, rentabilidad, eficiencia lo que se traduce en ahorros, ademas de que los componentes son naturales, holistico y mantienen la sostenibilidad del sistema dentro del ecosistema acuatico del cultivo'
        linkPage='/about/processInstallations'
        textButton='Visitar ahora' 
        />

     </Layout>
  )
}

export default AboutPage