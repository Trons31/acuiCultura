
import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'

import { Box, Button, Grid, Typography } from '@mui/material'
import { Layout } from '../components/layout'
import styles from '../styles/Home.module.css'
import { FcReducer } from '../components/reducer/FcReducer'




const Home: NextPage = ( {  }) => {


  
  return (
     <Layout  >
     
     <FcReducer />
    
  
   

     </Layout>
  )
}

export default Home
