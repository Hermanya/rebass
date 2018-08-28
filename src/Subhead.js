import sys from 'native-system-components'
import Heading from './Heading'

export const Subhead = sys({
  is: Heading,
  fontSize: 4
})

Subhead.displayName = 'Subhead'

export default Subhead
