import React from 'react'
import sys from 'native-system-components'
import Text from './Text'

export const Small = sys({
  is: Text,
  fontSize: 0
})

Small.displayName = 'Small'

export default Small
