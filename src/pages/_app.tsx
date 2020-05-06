import { appWithTranslation } from '@server/i18n'
import { DefaultSeo } from 'next-seo'
import { AppType } from 'next/dist/next-server/lib/utils'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { AnnouncementCenter } from '@/components/organisms'
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
      <DefaultSeo titleTemplate={`%s | Next React Typescript Boilerplate`} />
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <BaseLayout>
              <Component {...pageProps} />
              <AnnouncementCenter />
            </BaseLayout>
          </>
        </ThemeProvider>
      </ContextProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
