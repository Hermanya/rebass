import sys from 'native-system-components'
import Text from './Text'

export const Lead = sys({
  is: Text,
  fontSize: 3
})

Lead.displayName = 'Lead'

export default Lead
