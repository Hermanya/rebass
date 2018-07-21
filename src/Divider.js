import sys from 'native-system-components'
import {View, Platform} from 'react-primitives'
export const Divider = sys({
  is: {
    web: 'hr'
  }[Platform.OS] || View,
  mx: 0,
  my: 3,
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderColor: 'gray'
}, 'space', 'color')

Divider.displayName = 'Divider'

export default Divider
