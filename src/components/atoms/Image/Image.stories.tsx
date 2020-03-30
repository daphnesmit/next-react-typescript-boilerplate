import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import { Image } from './Image'

export default { title: 'Atoms|Image', component: Image }

export const Default = () => (
  <Image
    objectFit={boolean('Object fit', true)}
    width={text('width', '100%')}
    height={text('height', '')}
    preload={text(
      'preload',
      'https://images.unsplash.com/photo-1516125073169-9e3ecdee83e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=80',
    )}
    src={text(
      'src',
      'https://images.unsplash.com/photo-1516125073169-9e3ecdee83e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    )}
    srcSet={text(
      'srcset',
      'https://images.unsplash.com/photo-1516125073169-9e3ecdee83e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80 320w, https://images.unsplash.com/photo-1516125073169-9e3ecdee83e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480w, https://images.unsplash.com/photo-1516125073169-9e3ecdee83e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80 768w, https://images.unsplash.com/photo-1516125073169-9e3ecdee83e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80 1024w, https://images.unsplash.com/photo-1516125073169-9e3ecdee83e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80 1280w, https://images.unsplash.com/photo-1516125073169-9e3ecdee83e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80 1400w, https://images.unsplash.com/photo-1516125073169-9e3ecdee83e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80 1920w',
    )}
    alt={text('alt', 'Cat picture')}
    caption={text('caption', '')}
  />
)
