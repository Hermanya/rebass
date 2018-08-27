import sys from 'native-system-components'
import { Flex } from 'native-grid-styled'

export const Tabs = sys({
  is: Flex,
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderColor: 'gray'
})

Tabs.displayName = 'Tabs'

export default Tabs
