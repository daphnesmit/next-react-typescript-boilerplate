import { fontFace } from 'polished'
import { css } from 'styled-components'

export const fonts = css`
  ${fontFace({
    fontFamily: 'Work Sans',
    fontFilePath: '/fonts/work-sans-v4-latin-regular',
    fontWeight: 'normal',
    fontDisplay: 'fallback',
  })}
  ${fontFace({
    fontFamily: 'Work Sans',
    fontFilePath: '/fonts/work-sans-v4-latin-500',
    fontWeight: 'bold',
    fontDisplay: 'fallback',
  })}
`
