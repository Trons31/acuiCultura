import { FC } from "react";
import Head from "next/head"
import { Navbar, Sidebar } from "../ui";


type Section = {
  id: string;
  label: string;
};


interface Props {
    title : string;
    pageDescription : string;
    imageFullUrl?: string;
    sections: Section[];
    isMainPage: boolean;
    children: JSX.Element | JSX.Element[];
   
}

export const Layout:FC<Props> = ({ title ,children,pageDescription,sections, isMainPage , imageFullUrl }: Props) => {
  return (
    <>
    <Head>
        <title> {title || 'ACUICULTIVOS LA FE' } </title>

        <meta name="description" content={pageDescription}  />

        <meta name="og:title"  content={ title } />
        <meta name="og:description" content={ pageDescription } />

        {
          imageFullUrl && (
            <meta name="og:image" content={ imageFullUrl } />
          )
        }

    </Head>


    <nav>
        { /* Navabar */ }
         <Navbar sections={sections} isMainPage={isMainPage}   />
        { /* Navabar */ }
    </nav>

    { /*TODO: Sidebar-Drawer */ }
    
    <Sidebar isMainPage={isMainPage} />

    { /*TODO: Sidebar-Drawer */ }

    <main
    // style={{
    //      margin : '80px auto',
    //      maxWidth: '1440px',
    //      padding: '0px 30px'
    // }}
    >
    { children }
    </main>

    </>
  )
}
