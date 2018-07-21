import React from 'react'
import sys from 'native-system-components'
import Text from './Text'
import { letterSpacing } from 'styled-system'

const CapsBody = sys({
  is: Text,
  fontSize: 0,
  letterSpacing: 4
// }, {
//   textTransform: 'uppercase'
})

export const Caps = ({children, ...props}) => <CapsBody children={
  typeof children === 'string' ? children.toUpperCase() : children
} {...props}/>

Caps.displayName = 'Caps'

export default Caps
