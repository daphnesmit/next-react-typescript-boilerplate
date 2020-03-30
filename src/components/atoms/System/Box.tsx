import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  ButtonStyleProps,
  color,
  ColorProps,
  colorStyle,
  ColorStyleProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  style,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps,
  variant,
} from 'styled-system'

type TextDecorationOption = 'overline' | 'line-through' | 'underline'
type TextTransformOption = 'uppercase' | 'lowercase' | 'capitalize'

export type BoxProps = BackgroundProps &
  ButtonStyleProps &
  ColorProps &
  ColorStyleProps &
  FlexboxProps &
  LayoutProps &
  OpacityProps &
  PositionProps &
  SpaceProps &
  TextStyleProps &
  TypographyProps & {
    textDecoration?: TextDecorationOption | (TextDecorationOption | null | string)[]
    textTransform?: TextTransformOption | (TextTransformOption | null | string)[]
  } & HTMLAttributes<any>

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
})

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
})

const boxStyles = compose(
  background,
  color,
  colorStyle,
  flexbox,
  layout,
  opacity,
  position,
  space,
  textStyle,
  textDecoration,
  textTransform,
  typography,
  variant({
    prop: 'variant',
    scale: 'buttons',
    variants: {
      primary: {},
    },
  }),
)

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  boxStyles,
)
