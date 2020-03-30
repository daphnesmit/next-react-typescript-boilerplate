import { number, select, withKnobs } from '@storybook/addon-knobs'
import React from 'react'

import { IconOption, icons } from '@/theme'

import { Icon } from './Icon'

export default { title: 'Atoms|Icon', component: Icon, decorators: [withKnobs] }

export const example = () => (
  <Icon icon={select('Icon', Object.keys(icons), 'Logo') as IconOption} size={number('Size', 50)}>
    Go to a page
  </Icon>
)
