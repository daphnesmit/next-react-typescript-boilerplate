import { render } from '@test/utils'
import { axe } from 'jest-axe'

import { Button } from './Button'

test('renders with text', async () => {
  const text = 'Click me'
  const screen = render(<Button>{text}</Button>)

  const button = screen.container.querySelector('button')

  const results = await axe(screen.container)

  expect(results).toHaveNoViolations()

  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent(text)
  expect(button).toHaveAttribute('type', 'button')
})
