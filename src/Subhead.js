import React from 'react'
import sys from 'native-system-components'
import Heading from './Heading'
import {Text} from 'react-primitives'
const SubheadHelper = props =>
  <Heading
    is={Text}
    {...props}
  />

export const Subhead = sys({
  is: SubheadHelper,
  fontSize: 4
})

Subhead.displayName = 'Subhead'

export default Subhead
