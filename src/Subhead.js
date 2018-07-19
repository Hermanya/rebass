import React from 'react'
import sys from 'native-system-components'
import Heading from './Heading'
import {Text} from 'react-primitives'
const Base = props =>
  <Heading
    is={Text}
    {...props}
  />

export const Subhead = sys({
  is: Base,
  fontSize: 4
})

Subhead.displayName = 'Subhead'

export default Subhead
