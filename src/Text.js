import sys from 'native-system-components'
import {Text as TextAlias} from 'react-primitives'

export const Text = sys({
  is: TextAlias,
  m: 0
},
'space',
'color',
'fontFamily',
'fontSize',
'fontWeight',
'textAlign'
  // 'lineHeight'
)

Text.displayName = 'Text'

export default Text
