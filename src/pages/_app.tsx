import { DefaultSeo } from 'next-seo'
import { AppType } from 'next/dist/next-server/lib/utils'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { BaseLayout } from '@/components/templates'
import { ContextProvider } from '@/context/ContextProvider'
import { theme } from '@/theme'
import { GlobalStyle } from '@/theme/GlobalStyle'

if (process.browser) {
  require('@/utils/detectTouch')
  require('@/utils/detectKeyboardFocus')
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo titleTemplate={`%s | Your Site`} />
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <BaseLayout>
              <Component {...pageProps} />
            </BaseLayout>
          </>
        </ThemeProvider>
      </ContextProvider>
    </>
  )
}

export default MyApp
