import React, { InputHTMLAttributes, useState } from 'react'
import styled, { css } from 'styled-components'

import { colors } from '@/theme/colors'

import { IconButton } from '../IconButton'
import { Box } from '../System'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'textarea' | 'number' | 'password' | 'email' | 'tel'
  color?: 'white' | 'black'
  clearable?: boolean
  hasError?: boolean
  readonly?: boolean
  onClear?: () => void
}

const StyledInput = styled.input<InputProps>`
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  background-color: transparent;
  border: none;
  margin: 0;
  color: ${props => props.color || 'black'};
  padding: 12px 14px;

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  ${props =>
    props.hasError &&
    css`
      color: ${colors.error};
    `};

  ${props =>
    props.readOnly &&
    css`
      opacity: 0.3;
      user-select: none;
      cursor: not-allowed;
    `};
`

type InputWrapperProps = InputProps & { hasFocus: boolean }

const InputWrapper = styled.div<InputWrapperProps>`
  color: ${props => props.color || 'black'};
  border: 1px solid ${colors.grey.light};
  border-radius: 4px;
  position: relative;

  &:hover {
    border-color: ${colors.grey.medium};
  }

  ${props =>
    props.hasFocus &&
    css`
      outline: none;
      box-shadow: ${props.theme.shadows.outline || 'inherit'};
      border-color: ${colors.grey.medium};
    `};

  ${props =>
    props.hasError &&
    css`
      color: ${colors.error};
      border-color: ${colors.error} !important;
    `};
`

const ClearableWrapper = styled(Box)`
  transform: translateY(-50%);
`

export const Input: React.FC<InputProps> = ({ type, clearable, onClear, ...props }) => {
  const [hasFocus, setHasFocus] = useState(false)

  return (
    <InputWrapper color={props.color} hasFocus={hasFocus} hasError={props.hasError}>
      <StyledInput
        type={type}
        {...props}
        onBlur={e => {
          setHasFocus(false)
          if (props.onBlur) {
            props.onBlur(e)
          }
        }}
        onFocus={e => {
          setHasFocus(true)
          if (props.onFocus) {
            props.onFocus(e)
          }
        }}
      />
      {clearable && props.value && (
        <ClearableWrapper position="absolute" right={10} top="50%">
          <IconButton
            type="button"
            aria-label="Wissen"
            color={props.color}
            icon="CloseLight"
            size={15}
            onClick={onClear}
          />
        </ClearableWrapper>
      )}
    </InputWrapper>
  )
}
