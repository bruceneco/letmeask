import { animated } from 'react-spring'
import styled from 'styled-components'

export const AnimatedPageTransition = animated(styled.div`
  & > * {
    position: absolute;
    top: 0;
    left: 0;
  }
`)
