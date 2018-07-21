import sys from 'native-system-components'
import { Flex } from 'native-grid-styled'

export const Row = sys({
  is: Flex,
  flexDirection: 'row',
  mx: -3
})

Row.displayName = 'Row'

export default Row
