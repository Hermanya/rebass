import sys from 'native-system-components'
import Code from './Code'
import {Platform} from 'react-primitives'
export const Pre = sys({
  is: {
    web: 'pre'
  }[Platform.OS] || Code,
  fontSize: 1,
  fontFamily: 'monospace',
  m: 0
// }, {
//   overflow: 'auto'
},
'fontFamily',
'space',
'color'
)

Pre.displayName = 'Pre'

export default Pre
