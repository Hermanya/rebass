import sys from 'native-system-components'
import {Box} from './'
export const Divider = sys({
  is: Box,
  mx: 0,
  my: 3,
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 2,
  borderStyle: 'solid',
  borderColor: 'gray'
}, 'space', 'color')

Divider.displayName = 'Divider'

export default Divider
