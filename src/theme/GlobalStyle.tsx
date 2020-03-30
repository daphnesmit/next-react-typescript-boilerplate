import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'

import { fonts } from './fonts'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  ${fonts}

  body {
    font-family: ${theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.8;
    min-width: 320px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
