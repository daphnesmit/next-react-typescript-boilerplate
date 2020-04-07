import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

import { IconOption } from '@/theme'
import { colors } from '@/theme/colors'

import { Icon } from '../Icon'
import { Box, BoxProps } from '../System'

type ButtonElements = 'button' | 'a' | 'span'

interface IconButtonProps {
  as?: ButtonElements
  icon: IconOption
  'aria-label': string
  size: number
  height?: any
  padding?: number
  color?: string
  radii?: number
  rotate?: number
  selected?: boolean
  disabled?: boolean
  border?: boolean
  type?: string
}

interface ConditionalProps {
  as: ButtonElements
  type?: 'submit' | 'button' | 'reset'
}

interface IconButtonStyledProps {
  size: number
  height?: number
  padding: number
  radii?: number
  border?: boolean
}

const StyledIconButton = styled(Box)<IconButtonStyledProps>`
  border-radius: ${({ radii }) => radii}px;
  border: ${({ border }) => (border ? `1px solid ${colors.black};` : 'none')};
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.shadows.outline || 'inherit'};
  }
`

export const IconButton: FC<IconButtonProps & HTMLAttributes<any> & BoxProps> = ({
  icon,
  as = 'button',
  size = 40,
  height,
  color,
  border,
  rotate,
  radii = 0,
  padding = 0,
  bg,
  ...rest
}) => {
  const conditionalProps: ConditionalProps = { as }
  if (as === 'button') {
    conditionalProps.type = 'button'
  }

  return (
    <StyledIconButton
      {...conditionalProps}
      radii={padding > 5 ? radii : 0}
      size={size}
      height={height}
      padding={padding}
      border={border}
      bg={bg || 'transparent'}
      {...rest}>
      <Icon color={color} icon={icon} rotate={rotate} size={size} />
    </StyledIconButton>
  )
}
