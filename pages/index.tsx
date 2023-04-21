
import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'

import NextLink from 'next/link';
import { Box, Chip, Divider, Typography } from '@mui/material'
import { Layout } from '../components/layout'
import { Banner, Main, MainPost, Navbar, Respaldator, Slideshow } from '../components/ui'
import { Section2, Section3,Section4,Section5 } from '../components/sections'
import { Map } from '../components/ui';


const sections = [
  { id: 'section-1', label: 'INICIO' },
  { id: 'section-2', label: 'NOSOTROS' },
  { id: 'section-3', label: 'PRODUCTOS' },
  { id: 'section-4', label: 'ASESORIAS' },
  { id: 'section-5', label: 'CONTACTO' },
];



const Home: NextPage = ( {  }) => {

  
  
  return (
     <Layout sections={sections} isMainPage={true} isMainPageFooter={true} title='ACUICULTIVOS LA FE' pageDescription='ACUACULTIVOS LA FE S.A.S. es una empresa que se dedica a la cría, levante y engorde de tilapias como principal actividad económica, así como también ofrece Consultoría de proyectos para la adquisición de recursos, servicio técnico personalizado, asesoría y capacitación en temas claves para el buen desarrollo de la especie a cultivar alcanzando una buena relación costo-beneficio. ' imageFullUrl="logoNav.png" >
       
       
        <Box id="section-1">
          <section >
              <Slideshow />
          </section>
        </Box>
   
         <Main>

         <Box id="section-2" >
         <section >

           <Section2 />

        </section>
        </Box>

        <Box id="section-3" >
         <section >

           <Section3 />

        </section>
        </Box>
        </Main>
        
        <Banner
        titleBanner='Productos y servicios' 
        description='Ofrecemos a nuestros consumidores confianza y profesionalismo, traducido en la eficiencia de entrega de nuestro producto en el tiempo determinado previamente con las condiciones especificas acordadas como: color olor, sabor y tamaño'
        linkPage='/'
        textButton='Visitar ahora' 
        />
        
        <Main>
          <Box id="section-4">
          <section>

            <Section4 />

          </section>
          </Box>
        </Main>
        
        <MainPost 
        description='Nuestra finalidad es asesorar de la mejor forma al inversionista o pequeño, mediano, gran productor logrando que este tenga éxito en su inversión.'
        image='slide.jpg'
        imageText='venta de pescado'
        linkText='ver mas'
        title=""
        height={450}
        marginTop={0}
        marginBotton={15} 
        isBannerTextColor={true} 
        colorTextBanner="rgba(255, 255, 255, 0.8)" 
        isBannerTitleWithColor={false} 
       />
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.3684459877813!2d-75.39498302607339!3d9.300583884680904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e59144ee75cf761%3A0xd9d3b96a24b00ae7!2sCl.%2024%2C%20Sincelejo%2C%20Sucre!5e0!3m2!1ses!2sco!4v1681963140540!5m2!1ses!2sco" width="100%" height="450"  loading="lazy" ></iframe>

        <Main>

          <Box id="section-5">
            <section>
               <Box mt={0} mb={1}>
                <Divider>
                  <Chip
                   sx={{
                    height: 'auto',
                    '& .MuiChip-label': {
                      display: 'block',
                      whiteSpace: 'normal',
                    },
                    padding: '15px 5px',
                    fontSize: 25,
                    fontWeight: 600
                  }}
                  label="CONTACTENOS" />
                </Divider>
               </Box>

              <Section5 />

            </section>
          </Box>

        </Main>

        <Box mb={5} >
          <Box textAlign="center" mb={2}>
            <Typography fontSize={25}  fontWeight={600} sx={{ color: '#424242' }}  >
                <span style={{ color: 'red' }} >ACUICULTIVOS LA FE </span> 
            </Typography>
          </Box>
           <Map />
        </Box>

        {/* <Respaldator /> */}

     </Layout>
  )
}

export default Home
