import React from 'react'
import sys from 'native-system-components'
import ButtonTransparent from './ButtonTransparent'
import Text from './Text'
export const Close = sys({
  is: ButtonTransparent,
  p: 0,
  // lineHeight: 1,
  children: <Text fontSize={3}>×</Text>
}, {
  width: '24px',
  height: '24px'
})

Close.displayName = 'Close'

export default Close
