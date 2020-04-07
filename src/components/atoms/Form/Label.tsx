import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { colors } from '@/theme/colors'

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  color?: string
  htmlFor?: string
}

const StyledLabel = styled.label<LabelProps>`
  color: ${({ color }) => color || colors.black};
  cursor: pointer;
  user-select: none;
`

export const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>
}
