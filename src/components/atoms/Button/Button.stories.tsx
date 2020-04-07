import React from 'react'

import { Button } from '.'

export default { title: 'Atoms|Button', component: Button }

export const primary = () => <Button variant="primary">Button</Button>
export const secondary = () => <Button variant="secondary">Button</Button>
export const disabled = () => <Button disabled>Button</Button>
export const loading = () => <Button loading>Button</Button>
export const withIcon = () => <Button icon="Logo">Button</Button>
export const blockLevel = () => <Button block>Button</Button>
