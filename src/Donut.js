import React from 'react'
import sys from 'native-system-components'
import {Svg, Circle} from 'react-primitives-svg'
import { themeGet } from 'styled-system'
import {Box} from './'
const DonutBase = props => {
  const {size, strokeWidth, strokeColor, value, ...boxProps} = props
  const R = 16 - strokeWidth
  const C = 2 * Math.PI * R
  const color = themeGet('colors.' + strokeColor, strokeColor)(props)
  return (<Box {...boxProps}>
    <Svg
      viewBox='0 0 32 32'
      width={size || 128}
      height={size || 128}>
      <Circle
        cx={16}
        cy={16}
        r={R}
        fill='none'
        stroke={color}
        strokeWidth={strokeWidth}
        opacity='0.125'
      />
      <Circle
        cx={16}
        cy={16}
        r={R}
        fill='none'
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={C}
        strokeDashoffset={C - value * C}
        transform='rotate(-90 16 16)'
      />
    </Svg>
  </Box>
  )
}

export const Donut = sys({
  is: DonutBase,
  strokeColor: 'blue',
  strokeWidth: 2,
  value: 1
})

Donut.displayName = 'Donut'

export default Donut
