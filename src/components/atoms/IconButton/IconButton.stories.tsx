import { number, select, withKnobs } from '@storybook/addon-knobs'
import React from 'react'

import { IconOption, icons } from '@/theme'

import { IconButton } from '.'

export default { title: 'Atoms|IconButton', component: IconButton, decorators: [withKnobs] }

export const example = () => (
  <IconButton
    aria-label="Icon button"
    icon={select('Icon', Object.keys(icons), 'Logo') as IconOption}
    size={number('Size', 50)}></IconButton>
)
