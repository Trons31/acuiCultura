import React from 'react';
import NextLink from 'next/link';
import { Box, Typography, Divider, Grid, IconButton, Link, Button,Alert } from '@mui/material'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConstructionIcon from '@mui/icons-material/Construction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export const Section4 = () => {
  return (
   <>
   
   <Box display='flex' justifyContent='center' alignItems='center' >

    <Box>
      <Typography variant='h1' color='#333333' fontSize='35px' >ASESORIAS</Typography>
      <Box display='flex' justifyContent='center' >
        <Divider  sx={{ width: '25%', background: 'red' }} />
      </Box>
    </Box>


    </Box>


    <Grid container spacing={2} >


        <Grid item xs={12} sm={6} >
            
            <Box sx={{ display:{ xs: 'block', sm: 'flex' } }} mt={5} > 
                 <Box sx={{ display:{ xs: 'flex', sm: 'block' } }} justifyContent='center' >
                    <IconButton className='iconButton'>
                       <DesignServicesIcon sx={{ fontSize: 70 }} />
                    </IconButton>
                 </Box>
                 <Box ml={2}>
                   <NextLink href='/' passHref >
                      <Link color='#333333'  >
                        <Typography className='linkAsesoria' fontSize={20} fontWeight={550} >DISEÑO DE PLANES DE NEGOCIOS EN PRODUCCION PISCICOLA</Typography>
                      </Link>
                   </NextLink>

                   <p> Se realiza un estudio de las fortalezas y necesidades con las que cuenta el productor o inversionista con la intención de detallar de la mejor manera la inversión del proyecto y el costo del mismo.  </p>

                 </Box>
            </Box>

        </Grid>

        <Grid item xs={12} sm={6} >
            
            <Box sx={{ display:{ xs: 'block', sm: 'flex' } }} mt={5} > 
                 <Box sx={{ display:{ xs: 'flex', sm: 'block' } }} justifyContent='center'>
                    <IconButton className='iconButton'>
                       <SupportAgentIcon sx={{ fontSize: 70 }} />
                    </IconButton>
                 </Box>
                 <Box ml={2}>
                   <NextLink href='/' passHref >
                      <Link color='#333333'  >
                        <Typography className='linkAsesoria' fontSize={20} fontWeight={550} >ASESORIAS A PEQUEÑOS, MEDIANOS Y GRANDES PRODUCTORES PISCICOLAS</Typography>
                      </Link>
                   </NextLink>

                   <p> Según la necesidad del productor se realiza un análisis de las necesidades en las que requiera asesoría con la intención de mejorar la problemática presente en su empresa. </p>

                 </Box>
            </Box>

        </Grid>

        <Grid item xs={12} sm={6} >
            
            <Box sx={{ display:{ xs: 'block', sm: 'flex' } }} mt={5} > 
                 <Box sx={{ display:{ xs: 'flex', sm: 'block' } }} justifyContent='center'>
                    <IconButton className='iconButton' >
                       <EngineeringIcon sx={{ fontSize: 70 }} />
                    </IconButton>
                 </Box>
                 <Box ml={2} >
                   <NextLink href='/' passHref >
                      <Link color='#333333'  >
                        <Typography className='linkAsesoria' fontSize={20} fontWeight={550} >MONTAJE E INSTALACION DE ESTACIONES PISCICOLAS SEGUN LA NECESIDAD DEL PLAN DE NEGOCIO</Typography>
                      </Link>
                   </NextLink>

                   <p> Según la intención del inversionista se plantea un proyecto ajustado a      los recursos naturales, físicos y económicos con los que se cuente en   el momento con la posibilidad de mejoras futuras. </p>

                 </Box>
            </Box>

        </Grid>


        <Grid item xs={12} sm={6} >
            
            <Box sx={{ display:{ xs: 'block', sm: 'flex' } }} mt={5} > 
                 <Box sx={{ display:{ xs: 'flex', sm: 'block' } }} justifyContent='center'>
                    <IconButton className='iconButton'>
                       <BuildCircleIcon sx={{ fontSize: 70 }} />
                    </IconButton>
                 </Box>
                 <Box ml={2}>
                   <NextLink href='/' passHref >
                      <Link color='#333333'  >
                        <Typography className='linkAsesoria' fontSize={20} fontWeight={550} >FABRICACION E INSTALACION DE TANQUES EN GEOMENBRANA </Typography>
                        <Typography color='#757575' >Recubrimiento de estanques excavados y semi-excavados</Typography>
                      </Link>
                   </NextLink>

                   <p> Se fabrican tanques en geomembrana con estructuras metálicas con tamaños de 1 metro de diámetros hasta 20 metros de diámetro con 1.2 metros de altura (recomendada para el cultivo de peces).
                    <br/>
                    La estructura metálica donde se monta las piscinas puede ser fabricada en malla electro soldada o en platina.
                    </p>

                 </Box>
            </Box>

        </Grid>


        <Grid item xs={12} sm={6} >
            
            <Box sx={{ display:{ xs: 'block', sm: 'flex' } }} mt={5} > 
                 <Box sx={{ display:{ xs: 'flex', sm: 'block' } }} justifyContent='center'>
                    <IconButton className='iconButton'>
                       <ConstructionIcon sx={{ fontSize: 70 }} />
                    </IconButton>
                 </Box>
                 <Box ml={2}>
                   <NextLink href='/' passHref >
                      <Link color='#333333'  >
                        <Typography className='linkAsesoria' fontSize={20} fontWeight={550} >CONSTRUCCION DE PISCINAS EN TIERRA (ESTANQUES) SEGUN EL PLANTEAMIENTO DEL DISEÑO Y LA NECESIDAD DEL PRODUCTOR</Typography>
                      </Link>
                   </NextLink>

                   <p> Se realiza una inspección en el lugar a trabajar y se realiza un diagnóstico, luego se calcula la cantidad de material y el costo para la instalación.   </p>

                 </Box>
            </Box>

        </Grid>

        <Grid item xs={12} sm={6} >
            
            <Box sx={{ display:{ xs: 'block', sm: 'flex' } }} mt={5} > 
                 <Box sx={{ display:{ xs: 'flex', sm: 'block' } }} justifyContent='center'>
                    <IconButton className='iconButton'>
                       <ConstructionIcon sx={{ fontSize: 70 }} />
                    </IconButton>
                 </Box>
                 <Box ml={2}>
                   <NextLink href='/' passHref >
                      <Link color='#333333'  >
                        <Typography className='linkAsesoria' fontSize={20} fontWeight={550} >CONSTRUCCION DE PISCINAS EN TIERRA (ESTANQUES ESCAVADOS) SEGUN EL PLANTEAMIENTO DEL DISEÑO Y LA NECESIDAD DEL PROVEEDOR</Typography>
                      </Link>
                   </NextLink>

                   <p> Se realiza una visita de inspección al lugar donde el inversionista o      productor tiene la intención de construir los estanques y se plantea la forma que mejor se ajuste al terreno.</p>

                 </Box>
            </Box>

        </Grid>
    </Grid>

   </>
  )
}
