import sys from 'native-system-components'
import { Flex } from 'native-grid-styled'

export const Tabs = sys({
  is: Flex,
  borderBottom: 1,
  borderColor: 'gray'
})

Tabs.displayName = 'Tabs'

export default Tabs
