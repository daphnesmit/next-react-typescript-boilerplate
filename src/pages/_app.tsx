// import '@static/fonts/fonts.css'

import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { BaseLayout } from '@/components/templates'
import { ContextProvider } from '@/context/ContextProvider'
import { theme } from '@/theme'
import { GlobalStyle } from '@/theme/GlobalStyle'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
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
}
