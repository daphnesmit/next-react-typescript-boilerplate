import { LinkProps } from 'next/link'
import React, { Component } from 'react'
import styled from 'styled-components'

import { IconOption } from '@/theme'

import { Icon } from '../Icon'
import { Link } from '../Link'
import { Box, BoxProps, Flex } from '../System'

interface HyperLinkElementProps {
  icon?: IconOption
  underline?: boolean
  iconColor?: string
  color?: string
  target?: string
  block?: boolean
}

type HyperlinkProps = BoxProps & Pick<LinkProps, 'href' | 'as' | 'prefetch'> & HyperLinkElementProps

const HyperlinkWrapper = styled(Box)<HyperLinkElementProps>`
  display: inline-block;
  text-decoration: none;
  ${({ block }) => (block ? 'display: block;' : '')}
`

const HyperlinkLabel = styled.span<HyperLinkElementProps>`
  color: ${({ color, theme }) => color || theme.colors.primary};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: ${props => props.theme.outline || 'inherit'};
  }

  ${({ icon }) =>
    icon
      ? `
    display: flex;
    align-items: center;
    line-height: 1;
  `
      : ''}

  ${({ underline }) =>
    underline
      ? `
      &:after {
        content: '';
        display: block;
        background: currentColor;
        transition: max-width 0.15s ease-in;
        height: 1px;
        margin-top: -2px;
        max-width: 100%;
        width: 100%;
      }

      &:hover {
        &:after {
          max-width: 0%;
        }
      }
    `
      : ''}
`

// this is a class component because Hyperlinks often need a ref, and function components require React.forwardRef to forward refs
export class Hyperlink extends Component<HyperlinkProps> {
  render() {
    const { children, icon, color, href, as, iconColor, underline = true, ...props } = this.props
    return (
      <Link href={href} as={as} passHref>
        <HyperlinkWrapper as="a" {...props}>
          <HyperlinkLabel color={color} underline={underline}>
            <Flex alignItems="center" height="100%" as="span">
              {icon && (
                <Box pr={'xxs'} as="span">
                  <Icon size={16} icon={icon} color={iconColor} />
                </Box>
              )}
              {children}
            </Flex>
          </HyperlinkLabel>
        </HyperlinkWrapper>
      </Link>
    )
  }
}
