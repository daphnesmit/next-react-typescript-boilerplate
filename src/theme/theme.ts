import { DefaultTheme } from 'styled-components'

import * as iconComponents from '@/components/atoms/Icon/icons'
import { ThemeGrid } from '@/components/atoms/System'

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

const colors = {
  primary: '#FFCB07',
  primary2: '#F2B807',
  primary3: '#F2DFA7',
  primary4: '#F29F05',
  error: '#E00303',
  black: '#1c1c20',
  white: '#f5f7f9',
  succes: '#aed223',
  warning: '#ed4f88',
  neutral: '#52bcdf',
  grey: {
    dark: '#1c1c20',
    medium: '#c0c8da',
    light: '#d8deec',
    lighter: '#F2F2F2',
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
  grid: ThemeGrid
  outline?: string
}

export const theme: DefaultTheme = {
  breakpoints: ['40em', '52em', '64em', '80em'],
  fontSizes,
  space,
  fonts,
  colors,
  grid,
  outline: `5px auto #52bcdf`,
}
