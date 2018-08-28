import sys from 'native-system-components'
import {Box} from './'
export const Panel = sys({
  is: Box,
  bg: 'white',
  borderRadius: 2,
  border: 1,
  borderColor: 'gray'
}, {
  overflow: 'hidden'
}, 'space')

Panel.displayName = 'Panel'

Panel.Header = sys({
  is: Box,
  // fontSize: 2,
  p: 2,
  bg: 'white',
  borderBottomWidth: 1,
  borderColor: 'gray'
})

Panel.Header.displayName = 'Panel.Header'

Panel.Footer = sys({
  is: Box,
  // fontSize: 1,
  p: 2,
  bg: 'white',
  borderTopWidth: 1,
  borderColor: 'gray'
})

Panel.Footer.displayName = 'Panel.Footer'

export default Panel
