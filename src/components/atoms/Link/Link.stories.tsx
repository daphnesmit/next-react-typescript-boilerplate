import React from 'react'

import { Link } from './Link'

export default { title: 'Atoms|Link', component: Link }

export const example = () => (
  <Link href="/">
    <a>Go to page</a>
  </Link>
)

example.story = {
  parameters: {
    info:
      'The Next.js <Link> component differs from the react-router Link component. Check Next.js documentation: https://nextjs.org/docs#with-link',
  },
}
