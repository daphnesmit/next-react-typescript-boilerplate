import { hideVisually } from 'polished'
import React, { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { colors } from '@/theme/colors'

import { Icon } from '../Icon'
import { Box, Flex, Text } from '../System'
import { Label } from './Label'

export interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean
  hasError?: any
  value?: string
  name: string
  disabled?: boolean
}

const HiddenInput = styled.input`
  ${hideVisually()};
`

const Check = styled.div<{ hasError: boolean }>`
  height: 25px;
  width: 25px;
  display: inline-flex;
  flex-shrink: 0;
  background-color: ${colors.white};
  border: 1px solid ${colors.black};
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  input:checked + & {
    background-color: ${colors.black};
  }
  input:focus + & {
    outline: none;
    box-shadow: ${props => props.theme.shadows.outline || 'inherit'};
  }

  ${props =>
    props.hasError &&
    css`
      border: 1px solid ${colors.error};
    `}
`

export const Checkbox: React.FC<CheckBoxProps> = ({
  children,
  onFocus,
  onChange,
  onBlur,
  hasError,
  ...rest
}) => (
  <Label>
    <Flex opacity={rest.disabled ? 0.2 : 1}>
      <HiddenInput
        type="checkbox"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        {...rest}
      />
      <Check hasError={hasError}>
        <Icon icon="CloseNormal" size={13} color="white" />
      </Check>
      <Box>
        <Text color={colors.grey.medium} fontSize={14}>
          {children}
        </Text>
      </Box>
    </Flex>
  </Label>
)
