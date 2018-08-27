import sys from 'native-system-components'
import { Flex } from 'native-grid-styled'

export const Toolbar = sys({
  is: Flex,
  px: 2,
  color: 'white',
  bg: 'black',
  align: 'center',
  minHeight: '48px'
}, 'minHeight', {
  WebkitFontSmoothing: 'antialiased'
})

Toolbar.displayName = 'Toolbar'

export default Toolbar
