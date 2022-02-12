import defaultTheme from '../styles/theme'

type Theme = typeof defaultTheme

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
