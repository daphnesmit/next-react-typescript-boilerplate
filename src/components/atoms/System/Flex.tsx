import styled from 'styled-components'

import { Box, BoxProps } from './Box'

export type FlexProps = BoxProps

export const Flex = styled(Box)({})

Flex.defaultProps = {
  display: 'flex',
}
