import sys from 'native-system-components'
import {Text} from 'react-primitives'
export const Code = sys({
  is: Text,
  fontSize: 1,
  fontFamily: 'monospace'
},
  'fontFamily',
  'space',
  'color'
)

Code.displayName = 'Code'

export default Code
