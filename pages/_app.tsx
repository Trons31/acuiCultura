import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { darktheme } from '../themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { UiContext, UiProvider } from '../contexts/ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <ThemeProvider  theme={darktheme} >
      <CssBaseline/>
        <Component {...pageProps} />
    </ThemeProvider>
    </UiProvider>
  )
}

export default MyApp
