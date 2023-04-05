import { FC } from "react"
import Head from "next/head"
import { Box } from "@mui/material"
import { Navbar } from "../ui/";
import { Sidebar } from "../ui/Sidebar";

interface Props {
    title? : string;
    children?: JSX.Element | JSX.Element[];
}



export const Layout:FC<Props> = ({ title = 'Practica M', children }) => {
  return (
    <Box sx={{ flexflow:1 }} >
        <Head>
         <title>{ title } </title>
        </Head>
      
      <Navbar />
      
      <Sidebar />

     <Box>
        { children }
     </Box>

    </Box>
  )
}
