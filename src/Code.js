import sys from 'native-system-components'
import {Text} from './Text'
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
