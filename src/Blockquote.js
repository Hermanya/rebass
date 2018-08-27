import React from 'react'
import sys from 'native-system-components'
import {Box, Text} from './'

const BlockquoteHelper = ({children, textProps, ...props}) =>
  <Box {...props}>
    {typeof children === 'string'
      ? <Text {...textProps}>{children}</Text> : children}
  </Box>

BlockquoteHelper.displayName = 'BlockquoteHelper'

export const Blockquote = sys({
  is: BlockquoteHelper,
  borderLeftWidth: 2,
  borderStyle: 'solid',
  borderColor: 'blue',
  m: 0,
  textProps: {
    fontSize: 3
  }
}, 'maxWidth')

Blockquote.displayName = 'Blockquote'

export default Blockquote
