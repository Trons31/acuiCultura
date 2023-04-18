import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { darktheme } from '../themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { UiContext, UiProvider } from '../contexts/ui'
import { lightTheme } from '../themes/light-theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <ThemeProvider  theme={lightTheme} >
      <CssBaseline/>
        <Component {...pageProps} />
    </ThemeProvider>
    </UiProvider>
  )
}

export default MyApp
