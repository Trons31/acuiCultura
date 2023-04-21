import NextLink  from 'next/link';
import { Box, Button, Grid, TextField, Typography, IconButton, Link, TextareaAutosize } from '@mui/material';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';


export const Section5 = () => {
  return (
    <>
    
    
       <Box sx={{ display: 'flex', justifyContent:'center' }} >
         
         <Box sx={{ width:500 }} >
            <Grid container spacing={2}  >
            
            <Grid item xs={12} sm={6} > 
                <TextField label='Nombre' variant='outlined' fullWidth />
            </Grid>

            <Grid item xs={12} sm={6} > 
                <TextField label='Apellido' variant='outlined' fullWidth />
            </Grid>

            <Grid item xs={12} sm={6} > 
                <TextField label='Direccion' variant='outlined' fullWidth />
            </Grid>

            <Grid item xs={12} sm={6} > 
                <TextField label='Direccion 2 (Opcional)' variant='outlined' fullWidth />
            </Grid>


            <Grid item xs={12}  > 
            <TextField  label="Barrio"  variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12} >
                <TextField
                id="outlined-multiline-static"
                label="Referencias adicionales"
                multiline
                rows={4}
                placeholder='Descripcion de la fachada del lugar, puntos de referencia, indicaciones claves para llegar al lugar de entrega.'
                style={{ width: '100%' }}
                />
            </Grid>

        </Grid>

            <Box sx={{ mt: 2 }} display='flex' justifyContent='center' >
                <Button color="secondary" className="circular-btn" size="large" >
                    Enviar
                </Button>
            </Box>
         </Box>
         
      </Box>


      <Box display='flex' justifyContent='center' >
         <Box sx={{ width:800 }} >
          <Typography fontSize={17} fontWeight={300} mb={2} >Imformacion de contacto</Typography>
          <Typography fontSize={14} fontWeight={300} mb={2} >El pedido sera enviado a la direccion ingresada, nos comunicaremos con usted si surge un inconveniente con la entrega del pedido. si la direccion ingresada no pudo ser localizada o si hubo algun retrazo en el envio. <strong> es importante que digite un numero telefonico que utilize. </strong>  </Typography>
       </Box>
    </Box>

   </>
  )
}
