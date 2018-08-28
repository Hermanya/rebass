import sys from 'native-system-components'
import Text from './Text'
export const Label = sys({
  is: Text,
  fontSize: 1,
  mb: 1,
  align: 'center'
}, {
  display: 'flex'
}, 'alignItems', 'space', 'color')

Label.displayName = 'Label'

export default Label
