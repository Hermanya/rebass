import React from 'react'
import sys from 'native-system-components'
import {Svg, Circle} from 'react-primitives-svg'
import { themeGet } from 'styled-system'

const DonutBase = props => {
  const R = 16 - props.strokeWidth
  const C = 2 * Math.PI * R
  return (
    <Svg
      {...props}
      viewBox='0 0 32 32'
      width={props.size || 128}
      height={props.size || 128}>
      <Circle
        cx={16}
        cy={16}
        r={R}
        fill='none'
        stroke={themeGet('colors.' + props.strokeColor, props.strokeColor)(props)}
        strokeWidth={props.strokeWidth}
        opacity='0.125'
      />
      <Circle
        cx={16}
        cy={16}
        r={R}
        fill='none'
        stroke={themeGet('colors.' + props.strokeColor, props.strokeColor)(props)}
        strokeWidth={props.strokeWidth}
        strokeDasharray={C}
        strokeDashoffset={C - props.value * C}
        transform='rotate(-90 16 16)'
      />
    </Svg>
  )
}

export const Donut = sys({
  is: DonutBase,
  strokeColor: 'blue',
  strokeWidth: 2,
  value: 1
}, 'space', 'color')

Donut.displayName = 'Donut'

export default Donut
