import { useSprings } from '@react-spring/core'
import { animated, easings } from 'react-spring'
import { Children, useCallback, useEffect } from 'react'

type AnimateCascadeProps = {
  duration: number
  className?: string
  alternateDir?: 'leftRight' | 'topBottom'
  alternate?: boolean
  delay?: number
  animationId: string
  startDelay?: number
}

const AnimateCascade: React.FC<AnimateCascadeProps> = ({
  children,
  duration = 1500,
  className,
  alternate = false,
  alternateDir = 'leftRight',
  startDelay = 0,
  delay = 300,
  animationId
}) => {
  const childrenCount = Children.count(children)
  const getXYInitialValues = useCallback(
    (index) => {
      if (alternate) {
        if (alternateDir === 'leftRight') {
          return { x: index % 2 === 0 ? 50 : -50, y: 0 }
        } else {
          return { x: 0, y: index % 2 === 0 ? 50 : -50 }
        }
      }
      return { x: 0, y: 50 }
    },
    [alternate, alternateDir]
  )
  const [springs, api] = useSprings(childrenCount, (index) => ({
    opacity: 0,
    ...getXYInitialValues(index)
  }))
  useEffect(() => {
    api.start((i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      delay: i === 0 ? startDelay : delay * i,
      config: {
        duration,
        easing: easings.easeOutBack
      }
    }))
  }, [api, childrenCount, delay, duration, startDelay])

  return (
    <div className={className}>
      {springs.map((styles, index) => (
        <animated.div style={styles} key={`animation-${index}-${animationId}`}>
          {Children.toArray(children)[index]}
        </animated.div>
      ))}
    </div>
  )
}

export default AnimateCascade
