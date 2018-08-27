import React from 'react'
import sys from 'native-system-components'
import Text from './Text'

const SmallHelper = props =>
  <Text {...props} is='small' />

export const Small = sys({
  is: SmallHelper,
  fontSize: 0
})

Small.displayName = 'Small'

export default Small
