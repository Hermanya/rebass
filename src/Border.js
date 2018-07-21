import sys from 'native-system-components'

export const Border = sys({
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'gray'
}, 'space', 'width', 'color')

Border.displayName = 'Border'

export default Border
