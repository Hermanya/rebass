import sys from 'native-system-components'
import {Platform} from 'react-primitives'
import Text from './Text'
export const Label = sys({
  is: {
    web: 'label'
  }[Platform.OS] || Text,
  fontSize: 1,
  mb: 1,
  align: 'center'
}, {
  display: 'flex'
}, 'alignItems', 'space', 'color')

Label.displayName = 'Label'

export default Label
