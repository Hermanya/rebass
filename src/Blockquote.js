import sys from 'native-system-components'
import {Box} from './'

export const Blockquote = sys({
  is: Box,
  pl: 2,
  borderStyle: 'solid',
  borderColor: 'blue',
  m: 0,
  children: 'Block Quote',
  textProps: {
    fontSize: 3
  }
}, {
  borderLeftWidth: '2px'
})

Blockquote.displayName = 'Blockquote'

export default Blockquote
