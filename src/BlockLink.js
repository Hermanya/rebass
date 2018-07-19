import sys from 'native-system-components'
import {Touchable} from 'react-primitives'

export const BlockLink = sys({
  is: Touchable,
  color: 'inherit'
}, {
  display: 'block',
  textDecoration: 'none'
}, 'space', 'width')

BlockLink.displayName = 'BlockLink'

export default BlockLink
