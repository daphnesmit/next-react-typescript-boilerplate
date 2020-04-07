import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/theme'

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never

type RenderArgs = ArgumentTypes<typeof rtlRender>

export const Wrapper: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

// eslint-disable-next-line import/export
export * from '@testing-library/react'

// eslint-disable-next-line import/export
export const render = (ui: RenderArgs[0], config?: RenderArgs[1]) => {
  return rtlRender(ui, {
    wrapper: Wrapper,
    ...config,
  })
}
