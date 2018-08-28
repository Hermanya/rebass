import React from 'react'
import sys from 'native-system-components'
import Text from './Text'

const CapsHelper = ({children, ...props}) => <Text children={
  typeof children === 'string' ? children.toUpperCase() : children
} {...props} />

CapsHelper.displayName = 'Text'

export const Caps = sys({
  is: CapsHelper,
  fontSize: 0,
  letterSpacing: 4
})

Caps.displayName = 'Caps'

export default Caps
