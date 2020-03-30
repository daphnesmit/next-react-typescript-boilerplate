import React, { FC, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled, { css } from 'styled-components'

type StyledImageProps = {
  objectFit?: boolean
}

type SharedImageComponentProps = StyledImageProps & {
  src?: string
  srcSet?: string
  preload?: string
  alt: string
}

type ImageWrapperProps = StyledImageProps & {
  width?: string
  height?: string
}

type ImageComponentProps = SharedImageComponentProps &
  ImageWrapperProps & {
    caption?: string
  }

type ImageProps = FC<HTMLImageElement> & SharedImageComponentProps

const objectFitStyles = css`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
`
const defaultImageStyles = css`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
`

const ImageWrapper = styled.figure<ImageWrapperProps>`
  position: relative;
  margin: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
`

const StyledImage = styled.img<ImageProps>`
  ${defaultImageStyles}
  ${props => (props.objectFit ? objectFitStyles : '')};
  position: relative;
  display: block;
  opacity: 0;
  transition: opacity 300ms;
  z-index: 1;
  .image--is-loaded & {
    opacity: 1;
  }
`

const PreloadImage = styled.img<ImageProps>`
  ${defaultImageStyles}
  ${props => (props.objectFit ? objectFitStyles : '')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: opacity 300ms 50ms;
  opacity: 1;
  z-index: 0;
`

const StyledCaption = styled.figcaption``

export const Image: FC<ImageComponentProps> = ({
  src,
  srcSet,
  alt,
  preload,
  caption,
  objectFit = true,
  ...props
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>

  const [loaded, setLoaded] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const image = imageRef.current

    if (inView && image) {
      image.addEventListener('transitionend', transitionHandler, { once: true })

      if (!src) return swapImage()

      image.src = ''
      image.onload = () => swapImage()
      image.src = src

      if (srcSet) image.srcset = srcSet
    }
    return () => {
      if (image) {
        image.removeEventListener('transitionend', transitionHandler)
      }
    }
  }, [inView, imageRef, src, srcSet])

  const transitionHandler = ({ propertyName }: TransitionEvent) => {
    if (propertyName === 'opacity') {
      setLoaded(true)
    }
  }

  const swapImage = () => {
    setTransitioning(true)
  }

  return (
    <ImageWrapper
      {...props}
      objectFit={objectFit}
      ref={ref}
      className={transitioning ? 'image--is-loaded' : ''}>
      <StyledImage ref={imageRef} objectFit={objectFit} src={preload} alt={alt} />
      {!loaded && <PreloadImage objectFit={objectFit} src={preload} aria-hidden="true" alt={alt} />}
      {caption && <StyledCaption>{caption}</StyledCaption>}
    </ImageWrapper>
  )
}
