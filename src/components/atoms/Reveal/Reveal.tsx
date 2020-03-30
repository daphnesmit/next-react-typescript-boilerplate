import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

export interface RevealProps {}

interface RevealWrapperProps {
  inView: boolean
}

const RevealWrapper = styled.div<RevealWrapperProps>`
  transition: opacity 300ms;
  opacity: ${props => (props.inView ? 1 : 0)};
`

export const Reveal: React.FC<RevealProps> = ({ children }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  })

  return (
    <RevealWrapper ref={ref} inView={inView}>
      {children}
    </RevealWrapper>
  )
}
