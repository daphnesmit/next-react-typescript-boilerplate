import React, { FC } from 'react'
import styled from 'styled-components'

import { IconOption, icons } from '@/theme'
import { Omit } from '@/utils/types'

import { Box, BoxProps } from '../System'

type IconProps = Omit<BoxProps, 'width' | 'height'> & {
  icon: IconOption
  rotate?: number
  color?: string
  size?: number | any[]
}

const StyledIconWrapper = styled(Box)<BoxProps & { rotate?: number }>`
  transition: transform 0.2s ease-in-out;
  ${props => props.rotate && `transform: rotate(${props.rotate}deg);`};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`

export const Icon: FC<IconProps> = ({ size, icon, ...props }) => {
  const IconComponent = icons[icon]

  return (
    <StyledIconWrapper {...props} width={size || 24} height={size || 24} color={props.color}>
      <IconComponent
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style={{
          fill: 'currentColor',
        }}
        width="100%"
        height="100%"
      />
    </StyledIconWrapper>
  )
}
