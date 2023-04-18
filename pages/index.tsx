
import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'

import NextLink from 'next/link';
import { Box, Button, Grid, Link, Typography } from '@mui/material'
import { Layout } from '../components/layout'
import { Banner, Main, MainPost, Navbar, Slideshow } from '../components/ui'
import { Section2, Section3,Section4,Section5 } from '../components/sections'


const sections = [
  { id: 'section-1', label: 'INICIO' },
  { id: 'section-2', label: 'NOSOTROS' },
  { id: 'section-3', label: 'PRODUCTOS' },
  { id: 'section-4', label: 'ASESORIAS' },
  { id: 'section-5', label: 'CONTACTO' },
];



const Home: NextPage = ( {  }) => {

  
  
  return (
     <Layout sections={sections} isMainPage={true} title='ACUICULTIVOS LA FE' pageDescription='Descripcion de la pagina' >
       
       
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
        description='Conoce cada uno de nuestros productos y servicios '
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
        description='nuestra finalidad es asesorar de la mejor forma al inversionista o pequeño, mediano, gran productor logrando que este tenga éxito en su inversión.'
        image='slide.jpg'
        imageText='venta de pescado'
        linkText='ver mas'
        title=""
        height={450}
        marginTop={0}
        marginBotton={15} 
        isBannerTextColor={true} 
        colorTextBanner="rgba(255, 255, 255, 0.5)" 
        isBannerTitleWithColor={false} 
        colorTitleBanner={''} />
 
          <Main>
          <Box id="section-5">
         <section >

           <Section5 />

        </section>
        </Box>

         </Main>



     </Layout>
  )
}

export default Home
