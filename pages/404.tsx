import { NextPage } from "next";
import NextLink from 'next/link';
import { Box, Button, Link, Typography } from "@mui/material";
import { Layout } from "../components/layout";

const sections = [
    { id: 'section-1', label: 'INICIO' },
    { id: 'section-2', label: 'NOSOTROS' },
    { id: 'section-3', label: 'PRODUCTOS' },
    { id: 'section-4', label: 'ASESORIAS' },
    { id: 'section-5', label: 'CONTACTO' },
  ];
  

const Custom404 : NextPage = () => {

  return (
    <Layout sections={sections} isMainPage={false} title='Pagina no encontrada' pageDescription='Error pagina no encontrada'  >
      
      <Box
      display='flex'
      alignItems='center'
      justifyContent='center' 
      marginTop={30}
      sx={{ flexDirection: { xs:'column', sm:'row' } }}
      >
         <Typography component='h1' variant="h1" fontSize={60} fontWeight={700} >404 </Typography>
         <Typography  component='h1' variant="h1" fontSize={60} fontWeight={700} sx={{ display:{ xs: 'none', sm: 'block' }, ml:2 }} >|</Typography>
         <Typography ml={2} >Pagina no encontrada </Typography>

      </Box>
      <Box display="flex" mt={3} justifyContent="center" >
        <NextLink href="/" passHref >
          <Link>
            <Button variant='outlined' size="large" className="buttonError" >
                Volver al inicio
            </Button>
          </Link>
        </NextLink>
      </Box>
 
    </Layout>
  )
}

export default Custom404;