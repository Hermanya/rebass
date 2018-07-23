import sys from 'native-system-components'
import Text from './Text'
import {Platform} from 'react-primitives'
const css = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}
export const Truncate = sys({
  is: Text,
  numberOfLines: 1
}, Platform.OS === 'web' ? css : {})

Truncate.displayName = 'Truncate'

export default Truncate
