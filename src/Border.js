import sys from 'native-system-components'
import {Box} from './'
export const Border = sys({
  is: Box,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'gray'
}, 'space', 'width', 'color')

Border.displayName = 'Border'

export default Border
