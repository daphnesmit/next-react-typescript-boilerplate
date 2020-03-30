import 'styled-components'

import { CustomTheme } from '@/theme/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
