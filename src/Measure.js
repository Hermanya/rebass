import sys from 'native-system-components'
import Text from './Text'

export const Measure = sys({
  is: Text,
  maxWidth: '32em'
}, 'maxWidth')

Measure.displayName = 'Measure'

export default Measure
