import React, { ButtonHTMLAttributes, Component } from 'react'
import Ink from 'react-ink'
import styled from 'styled-components'

import { buttons, IconOption } from '@/theme'

import { Icon } from '../Icon'
import { Loader } from '../Loader'
import { Box, BoxProps } from '../System'

type ButtonElements = 'button' | 'a'

interface ConditionalProps {
  as: ButtonElements
  type?: 'submit' | 'button' | 'reset'
}

export type ButtonProps = BoxProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: ButtonElements
    variant?: keyof typeof buttons
    size?: 'small' | 'normal'
    disabled?: boolean
    iconReverse?: boolean
    icon?: IconOption
    block?: boolean
    inline?: boolean
    justify?: 'center' | 'space-between'
    loading?: boolean
    selected?: boolean
    ripple?: boolean
    href?: string
    target?: string
    // adds a test id so it's easier to find in integration/e2e tests
    'data-testid'?: string
  }

const ButtonBase = styled(Box)<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  user-select: none;

  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.shadows.outline || 'inherit'};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${props => (props.inline ? 'display: inline-flex' : '')};
  ${props => (props.block ? 'display: block; width: 100%;' : '')};
  ${props => (props.variant !== 'clear' ? 'height: 50px;' : '')}
`

const ButtonLabel = styled.span<ButtonProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${props => props.justify};
  flex-direction: ${props => (props.iconReverse ? 'row-reverse' : 'row')};
`

const IconWrapper = styled.span<ButtonProps>`
  margin: ${props => (!props.iconReverse ? '0 0 0 12px' : '0 12px 0 0')};
`

// this is a class component because Buttons often need a ref, and function components require React.forwardRef to forward refs
export class Button extends Component<ButtonProps> {
  render() {
    const {
      as = 'button',
      icon,
      children,
      variant = 'primary',
      justify = 'center',
      size = 'normal',
      type = 'button',
      ripple = true,
      loading,
      disabled,
      ...props
    } = this.props

    const conditionalProps: ConditionalProps = { as }

    if (as === 'button') {
      conditionalProps.type = type
    }

    return (
      <ButtonBase
        {...conditionalProps}
        variant={variant}
        disabled={disabled || loading}
        size={size}
        {...props}>
        {variant === 'clear' ? (
          children
        ) : (
          <>
            {ripple && <Ink />}
            <ButtonLabel size={size} justify={justify} {...props}>
              {loading ? (
                <Loader color={'white'} size={50} />
              ) : (
                <>
                  <span>{children}</span>
                  {icon && (
                    <IconWrapper>
                      <Icon size={18} icon={icon} />
                    </IconWrapper>
                  )}
                </>
              )}
            </ButtonLabel>
          </>
        )}
      </ButtonBase>
    )
  }
}
