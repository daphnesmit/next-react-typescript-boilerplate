import { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { TypographyProps } from 'styled-system'

import { Box, BoxProps } from './Box'

export type TextProps = BoxProps &
  TypographyProps &
  HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLLabelElement> & {
    as?:
      | 'p'
      | 'small'
      | 'strong'
      | 'em'
      | 'span'
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'
      | 'label'
    target?: string
    singleLine?: boolean
  }

export const Text = styled(Box)<TextProps>`
  ${props =>
    props.singleLine &&
    css`
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`
export const Paragraph = styled(Text)({})

Text.defaultProps = {
  as: 'span',
}
Paragraph.defaultProps = {
  as: 'p',
}
