import { fontFace } from 'polished'

export const fonts = {
  ...fontFace({
    fontFamily: 'Work Sans',
    fontFilePath: '/fonts/work-sans-v4-latin-500',
    fontWeight: 'normal',
    fontDisplay: 'fallback',
  }),
  ...fontFace({
    fontFamily: 'Work Sans',
    fontFilePath: '/fonts/work-sans-v4-latin-500',
    fontWeight: 'bold',
    fontDisplay: 'fallback',
  }),
}
