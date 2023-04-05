import { FC, useReducer, useState } from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import { pruebaReducer } from './'

export interface InitialR { // Primero Creamos las propiedades que manejara nuestro reducer, exportamos la interface que tiene nuestras propiedades para tipar el estado en nuestro reducer con estas propiedades
    num : number;
  }
  
  const InitialReducer: InitialR = { // Creamos el valor inicial que tendra nuestro reducer debe corresponder al tipoado de nuestras propiedades
      num: 1,
  }
  
  interface Props {
    children? : JSX.Element | JSX.Element[]
  }


export const FcReducer:FC<Props> = ({ children }) => {

    
  const [canats, setcanats] = useState(true) // TODO: useState para manejar el estado de la cantidad de canastas

  const [bults, setbults] = useState(true) // TODO: useState para manejar el estado de la cantidad de bultos

  const [Contstate, dispatch] = useReducer(pruebaReducer, InitialReducer )


  return (
    <Grid  container justifyContent='center' sx={{ paddingTop:12 }} >

    <Grid item md={4} textAlign='center'  >
         <Typography  variant='h2' > Use State </Typography>


         <Typography> Cantidad </Typography>
         <Box 
          sx={{ marginTop:3 }} 
          display='flex'
          justifyContent='space-between'
          >
     
       
           <Grid item md={6}  >

            {
              canats 
              ? (
                <Button
              variant='outlined'
              color='primary'
              endIcon={<AddOutlinedIcon />}
              onClick={ () => { // TODO: Para llamar varias funciones en un evento de OnClik despues de hacer la funcion de flecha debemos abrir llaves y podremos llamar todas las funciones que querramos
                setcanats(false)
                setbults(true);
              }}
              >
               canasta/s
            </Button>
              )
              :(
                <>
                <Button
              variant='outlined'
              color='primary'
              endIcon={<AddOutlinedIcon />}
              onClick={ () => {
                setcanats(false);
                setbults(true);
              }}
              >
               canasta/s
            </Button>
            <Box 
            display='flex'
            justifyContent='center'
            >
            <Button
            onClick={() => dispatch({type : 'aumentar'}) }
            >
            <AddOutlinedIcon />
            </Button>
              <span> { Contstate.num } </span>
            <Button
            onClick={() => dispatch({ type: 'decrementar' })}
            >
              <HorizontalRuleOutlinedIcon/>
            </Button>
            </Box>
                </>
              )
            }

           </Grid>

           <Grid item md={6}  >

            {

             bults
             ?(
            <Button
              variant='outlined'
              color='primary'
              endIcon={<AddOutlinedIcon />}
              onClick={ () => {
                setbults(false);
                setcanats(true);
              }}
              >
                Bulto/s '10 canastas'
            </Button> 
             )
             :(
              <>
              <Button
              variant='outlined'
              color='primary'
              endIcon={<AddOutlinedIcon />}
              onClick={ () => {
                setbults(false);
                setcanats(true);
              }}
              >
                Bulto/s '10 canastas'
            </Button> 

            <Box 
              display='flex'
              justifyContent='center'
              >
              <Button>
              <AddOutlinedIcon />
              </Button>
                 <Typography sx={{ marginTop:1 }} > 1 </Typography>
              <Button>
                <HorizontalRuleOutlinedIcon/>
              </Button>
              </Box>
              </>
             
             )

            }
            

             
           
          
            </Grid>
         
     
         
     
     
         
       

        </Box>


       

    </Grid>
    
    </Grid>    

    
  )
}
