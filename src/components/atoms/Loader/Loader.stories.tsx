import React from 'react'

import { Loader } from './Loader'

export default { title: 'Atoms|Loader', component: Loader }

export const example = () => <Loader color="black"></Loader>

example.story = {
  parameters: {
    info:
      'The loader is just a svg from https://loading.io. It is also being used as a button loader in the `Button` component.',
  },
}
