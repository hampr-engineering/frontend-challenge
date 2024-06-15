import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import { printDeveloperMessage } from 'utils/constants'
import createEmotionCache from 'utils/createEmotionCache'
import theme from 'utils/theme'

import 'styles/global.scss'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  useEffect(() => {
    if (document.readyState === 'complete') {
      printDeveloperMessage()
    } else {
      window.addEventListener('load', printDeveloperMessage)
      return () => window.removeEventListener('load', printDeveloperMessage)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component
          {...pageProps}
        />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
