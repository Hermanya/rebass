import sys from 'native-system-components'
import {Touchable} from 'react-primitives'
export const Tab = sys({
  is: Touchable,
  fontSize: 1,
  fontWeight: 'bold',
  mr: 3,
  py: 2,
  color: 'inherit',
  borderBottom: 2,
  borderColor: 'transparent',
  hover: {
    color: 'blue'
  }
}, {
  textDecoration: 'none'
})

Tab.displayName = 'Tab'

export default Tab
