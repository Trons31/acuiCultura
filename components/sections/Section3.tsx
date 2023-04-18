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
              
              <Box display="flex" alignItems='center' >
                <Typography gutterBottom variant="h5" fontWeight={600} color="#424242" component="div"> ARREGLADO</Typography>
                <Box flex={1} />
                <Typography color='#757575'  >Listo para la prepraracion</Typography>
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

   <Box sx={{ display:{ xs: 'block', sm: 'flex' } }} alignItems="center" justifyContent="space-between" >

        <Chip
        icon={<Filter1Icon />}
        sx={{
          height: 'auto',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
          padding: '10px 20px'
        }}
        label=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est assumenda quae! Soluta velit placeat aliquam quas sint numquam eveniet?"
        
      />
  
        <Chip
        icon={<Filter2Icon />}
        sx={{
          height: 'auto',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
          padding: '10px 20px'
        }}
        label=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est assumenda quae! Soluta velit placeat aliquam quas sint numquam eveniet?"
      />

    <Chip
    icon={<Filter3Icon />}
        sx={{
          height: 'auto',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
          padding: '10px 20px'
        }}
        label=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est assumenda quae! Soluta velit placeat aliquam quas sint numquam eveniet?"
        
      />

      <Chip
      icon={<Filter4Icon />}
        sx={{
          height: 'auto',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
          padding: '10px 20px'
        }}
        label=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est assumenda quae! Soluta velit placeat aliquam quas sint numquam eveniet?"
        
      />

   </Box>



    

  
    </>
  );
}