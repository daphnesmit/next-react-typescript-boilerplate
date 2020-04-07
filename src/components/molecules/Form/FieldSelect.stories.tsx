import React from 'react'

import { FieldSelect } from './FieldSelect'

export default { title: 'Forms|Select field', component: FieldSelect }

const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Ember'].map(item => ({
  value: item,
  label: item,
}))

export const example = () => (
  <FieldSelect options={frameworks} name="framework" label="Framework"></FieldSelect>
)

example.story = {
  parameters: {
    info:
      'Uses react-select (https://github.com/JedWatson/react-select) to create a accessible select component',
  },
}
