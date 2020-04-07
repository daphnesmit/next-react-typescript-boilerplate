import React from 'react'

import { FieldInput } from './FieldInput'

export default { title: 'Forms|Input field', component: FieldInput }

export const withLabel = () => <FieldInput name="firstName" label="First name"></FieldInput>

export const withPlaceholder = () => (
  <FieldInput name="firstName" placeholder="First name"></FieldInput>
)

export const clearable = () => (
  <FieldInput name="firstName" label="First name" value="Paul Manuel" clearable></FieldInput>
)

export const otherType = () => (
  <FieldInput
    type="number"
    name="pancakes"
    label="Amount of pancakes"
    min={1}
    max={10}></FieldInput>
)
