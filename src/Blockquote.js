import React from 'react'
import sys from 'native-system-components'
import Text from './Text'

export const Blockquote = sys({
  is: Text,
  fontSize: 3,
  m: 0
})

Blockquote.displayName = 'Blockquote'

export default Blockquote
