import NextLink from 'next/link';
import { NextPage } from 'next'

import React from 'react'
import { Layout} from '../../components/layout'
import { Banner, Main, MainPost } from '../../components/ui'
import { Box,  Grid, Typography,Link,Button, Card, CardMedia, IconButton } from '@mui/material';
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
        <Layout 
        sections={sections}
         isMainPage={false} 
         isMainPageFooter={false} 
         title='¿Quienes somos?' 
         pageDescription='Conoce todo acerca de avicultivos la fe, quienes somos, nuestras instalaciones y procesos en la piscicultura' >
        
        <MainPost 
        description='CONTAMOS CON LO ULTIMO EN TECNOLOGIA PARA MAXIMAR LA PRODUCTIVIDAD Y REDUCIR LOS COSTOS DE PRODUCCION CON UN ENFOQUE MEDIO AMBIENTAL'
        image='slide.jpg'
        imageText='venta de pescado'
        linkText='ver mas'
        marginTop={0}
        marginBotton={1}
        height={300}
        title={'TECNOLOGIA DE VANGUARDIA'} 
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

                 <Box display="flex" ml={2} >
                 <Typography textAlign="center" fontSize={40} >TECNOLOGIA SIMBIOTICA</Typography>
                </Box>
                
                <Box mt={3} sx={{ borderLeft: '4px solid red', padding: '10px 10px' }} >
                El componente innovador es la tecnologia simbiotica la cual nos ayuda a cuidar el medio ambiente ya que reduce los recambios de agua, es una alternativa para disminuir los impactos negativos de los afluentes en la actividad acuicola. Esta tecnologia es una de las mas innovadoras para la gestion de desechos y retencion de nutrientes, puesto que ofrece una solucion para resolver los problemas ambientales de la acuicultura; esta tecnica que mejora la calidad del agua por medio del balance del carbono y el nitrogeno en el sistema, debido a que permite expulsar estos componentes del agua. 
                </Box>

            </Box>
        </Grid>

        <Grid item xs={12} sm={12} >
                <Box textAlign="center" mb={1} mt={4}>

                <Typography fontSize={25} textTransform='uppercase'  fontWeight={600} sx={{ color: '#424242' }}  >
                <span style={{ color: 'red' }} >La arquitectura simbiotica</span> se basa en la utilizacion de microorganismos que ejercen una accion beneficiosa directa o indirecta sobre la salud del animal y sobre la calidad del agua del cultivo
                </Typography>
              </Box>
          </Grid>

          <Grid item xs={12} sm={6} >
              
              <Box sx={{ display:{ xs: 'block', sm: 'flex' } }} mt={5} > 
                  <Box sx={{ display:{ xs: 'flex', sm: 'block' } }} justifyContent='center' >
                      <IconButton className='iconButton'>
                       
                      </IconButton>
                  </Box>
                  <Box ml={2}>
                   <Typography fontSize={30} fontWeight={900} >Proceso de produccion</Typography>

                   <Typography sx={{ color: '#757575', mt:2 }} >Para el proceso de produccion de la <strong>Tilapia Roja</strong> se tiene dos estanques para alevines para los cuales, se tiene en cuenta factores importantes como la tierra, ya que este es el suelo donde se encuentran los estanques la cual cumple con las condiciones requeridas para su buen funcionamiento, ademas el trabajo de los empleados encargados de la alimentacion y el cuido de los peces, para esto contamos con personal capacitado los cuales tienen turnos rotativos para que en ningun momento del dia los peces se descuiden. </Typography> 

                  </Box>
              </Box>

          </Grid>

        <Grid item xs={12} sm={6} mt={4} >
            
        <Box sx={{ display:{ xs: 'block', sm: 'flex' } }} mt={5} > 
              <Box sx={{ display:{ xs: 'flex', sm: 'block' } }} justifyContent='center' >
                  <IconButton className='iconButton'>
                    
                  </IconButton>
              </Box>
              <Box ml={2}>
              <Typography textAlign="start" fontSize={30} fontWeight={900} >Proceso de cria y levante </Typography>

                <Typography sx={{ color: '#757575', mt:2 }} >Para el proceso de produccion<strong>cria y levante </strong> es importante el uso de la energia 24/7 y de la tecnologia para monitorear el proceso de los peces el tamaño, peso, etc. Los tiempos requeridos para llegar al proceso final que es la comercializacion de la tilapia roja entre 300, 350 y 400 gramos es de 5 a 6 meses, para monitorear este proceso los puntos de revision es hacer muestras aleatorias en cada estanque de un 10% de la produccion de cada uno. De esta manera se logra obtener una realidad del proceso de la Tilapia Roja como su peso, color, tamaño para proceder a su comercializacion.</Typography> 

              </Box>
          </Box>
      

        </Grid>
       
        </Grid>

        </Main>

        <Banner
        titleBanner='ACUICULTIVOS LA FE' 
        description='Ofrece una variedad alimenticia rica desde un punto de vista nutricional por su contenido en proteinas con alto valor biologico, similiar al contenido proteico que encontramos en el pollo. De echo 100 gramos de tilapia contienen 26 gramos de proteina y solo 128 gramos de calorias'
        linkPage='/about'
        textButton='Visitar ahora' 
        />

    </Layout>
  )
}

export default ProcessAndInstallationsPage;