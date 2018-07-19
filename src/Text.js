import sys from 'native-system-components'
import {Text} from 'react-primitives'

export const Text = sys({
  is: Text,
  m: 0
},
  'space',
  'color',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight'
)

Text.displayName = 'Text'

export default Text
