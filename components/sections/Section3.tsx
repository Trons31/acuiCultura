import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, AlertTitle, Box, CardActionArea, CardActions, Chip, Divider, Grid } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';


export const Section3 = () => {
 

  return (
    <>
    <Box display='flex' justifyContent='center' alignItems='center' mt={4} >

    <Box>
      <Typography variant='h1' color='#333333' fontSize='35px' >PRODUCTOS</Typography>
    </Box>
    </Box>

    
    <Box mt={2} >
      <Divider>
        <Chip label="PRODUCTOS EN ALTA CALIDAD" />
      </Divider>
    </Box>
     
   <Grid container spacing={5} mb={10} mt={4} >

      <Grid item xs={12} sm={4} >
          <Card className="carProduct">
            <CardMedia
              component="img"
              height="240"
              image="/product/pe.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontWeight={600} color="#424242">
                ENTERO
              </Typography>

              <Box  display="flex" sx={{mt:2 }}>
              <Divider orientation="vertical" flexItem sx={{ background: 'red', height: '100px', width: '4px' }} />
              
              <Box ml={2} padding="5px 5px" >
                <Typography variant="body2" color="text.secondary">
                Se comercializa pescado entero (tilapia roja o mojarra roja): con vísceras, escamas y branquias, fresco.
                </Typography>
              </Box>

              </Box>

            </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} >
          <Card  className="carProduct" >
            <CardMedia
              component="img"
              height="240"
              image="/product/pe.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontWeight={600} color="#424242">
              EVISCERADO O EN CANAL
              </Typography>

              <Box  display="flex" sx={{mt:2 }}>
              <Divider orientation="vertical" flexItem sx={{ background: 'red', height: '100px', width: '4px' }} />
              
                <Box ml={2} padding="5px 5px" >
                <Typography variant="body2" color="text.secondary">
                Se comercializa pescado eviscerado o en canal, esta presentación es pescado con branquias y escamas, sin vísceras, fresco.
                </Typography>
              </Box>
             </Box> 
            </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} >
          <Card className="carProduct">
            <CardMedia
              component="img"
              height="240"
              image="/product/pe.jpeg"
              alt="green iguana"
            />
            <CardContent>
              
              <Box sx={{ display:{ xs: 'block', sm: 'flex' } }} alignItems='center' >
                <Typography gutterBottom variant="h5" fontWeight={600} color="#424242" component="div"> ARREGLADO</Typography>
                <Box flex={1} />
                <Typography color='#757575' sx={{ textAlign: { xs: 'end' } }} >Listo para la prepraracion</Typography>
              </Box>
               
              <Box  display="flex" sx={{mt:2 }}>
              <Divider orientation="vertical" flexItem sx={{ background: 'red', height: '100px', width: '4px' }} />
              
              <Box ml={2} padding="5px 5px" >
                <Typography  color="#757575" fontWeight={400} fontSize={15}>
                  Se comercializa pescado entero (tilapia roja o mojarra roja): con vísceras, escamas y branquias, fresco.
                  </Typography>
               </Box>
              </Box>

               <Box mt={2}>
                <Divider>
                  <Chip label="Envios solo en el lugar donde reside la empresa" />
                </Divider>
               </Box>

            </CardContent>
        </Card>
      </Grid>

   </Grid>


   <Box textAlign="center" mb={3}>
         <Typography fontSize={25}  fontWeight={600} sx={{ color: '#424242' }}  >
             PRESTAMOS NUESTROS SERVICIOS Y OFRECEMOS NUESTROS PRODUCTOS EN LA MAS  <span style={{ color: 'red' }} >ALTA CALIDAD</span>  
             </Typography>
   </Box>  

   {/* <Grid container spacing={2} >
      <Grid item xs={12} sm={3} textAlign="center" >
        <Filter1Icon />
        <Chip
          sx={{
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
            padding: '15px 5px',
            fontSize: 15,
            fontWeight: 400
          }}
          label="Oferta de pescado tilapia roja por kilo, al por menor y al detal, fresco de alta calidad, con el mejor proceso de cultivo y con la mas avanzada tecnologia"
          
        />
      </Grid>

      <Grid item xs={12} sm={3} textAlign="center" >
      <Filter2Icon />
        <Chip
          sx={{
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
            padding: '15px 5px',
            fontSize: 15,
            fontWeight: 400
          }}
          label="Ofrecemos a nuestros consumidores confianza y profesionalismo, traducido en la eficiencia de entrega de nuestro producto en el tiempo determinado previamente con las condiciones especificas acordadas como: color olor, sabor y tamaño"
          
        />
      </Grid>

      <Grid item xs={12} sm={3} textAlign="center" >
        <Filter3Icon />
        <Chip
          sx={{
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
            padding: '15px 5px',
            fontSize: 15,
            fontWeight: 400
          }}
          label="Ofrece una variedad alimenticia rica desde un punto de vista nutricional por su contenido en proteinas con alto valor biologico, similiar al contenido proteico que encontramos en el pollo. De echo 100 gramos de tilapia contienen 26 gramos de proteina y solo 128 gramos de calorias"
          
        />
      </Grid>

      <Grid item xs={12} sm={3} textAlign="center" >
      <Filter4Icon />
        <Chip
          sx={{
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
            padding: '15px 5px',
            fontSize: 15,
            fontWeight: 400
          }}
          label="Garantizamos un pescado que contiene proteinas de buena calidad, concentrado que contiene  minerales como el hierro, el zinc, fosforo, selenio, y potasio, acidos grasos como el omega 3 entre otros nutrientes; esto es posible proporcionar debido a la exelente alimentacion y crianza que contiene nuestro producto"
          
        />
      </Grid>
   </Grid> */}

    </>
  );
}