import { darken } from 'polished'
import { DefaultTheme } from 'styled-components'

import * as iconComponents from '@/components/atoms/Icon/icons'
import { ThemeGrid } from '@/components/atoms/System'

import { colors } from './colors'
import { grid } from './grid'

const fontSizes = {
  xxxs: 12,
  xxs: 16,
  xs: 20,
  s: 30,
  m: 40,
  l: 60,
  xl: 80,
  xxl: 100,
}

const space = {
  xxxs: 8,
  xxs: 10,
  xs: 20,
  s: 40,
  m: 60,
  l: 80,
  xl: 100,
  xxl: 120,
}

const fonts = {
  primary: 'Work Sans, sans-serif',
  secondary: 'Helvetica',
}
const buttonBase = {
  fontWeight: 'bold',
  border: '1px solid',
  borderColor: 'primary',
  padding: '0 20px',
  height: 50,
  borderRadius: 50,
}

export const buttons = {
  primary: {
    ...buttonBase,
    bg: 'primary',
    color: 'white',
    ['&:hover, &:focus']: {
      backgroundColor: darken(0.2, colors.primary),
    },
  },
  secondary: {
    ...buttonBase,
    color: 'black',
  },
  clear: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0',
    height: 'auto',
  },
}

const shadows = {
  small: '0 0 4px rgba(0, 0, 0, .125)',
  large: '0 0 24px rgba(0, 0, 0, .125)',
  outline: '0px 0px 0px 4px rgba(0, 0, 0, 0.1);',
}

const input = {
  borderColor: '#bdbdbd',
  height: '50px',
  hover: {
    borderColor: '#7b7b7b',
  },
}

export const icons = iconComponents

export type IconOption = keyof typeof icons

export interface CustomTheme {
  breakpoints: string[]
  fontSizes: typeof fontSizes
  space: typeof space
  fonts: typeof fonts
  colors: typeof colors
  shadows: typeof shadows
  buttons: typeof buttons
  grid: ThemeGrid
  outline?: string
  input?: typeof input
}

export const theme: DefaultTheme = {
  breakpoints: ['40em', '52em', '64em', '80em'],
  fontSizes,
  space,
  fonts,
  colors,
  shadows,
  buttons,
  grid,
  outline: `5px auto #52bcdf`,
  input,
}
