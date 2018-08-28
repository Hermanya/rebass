import sys from 'native-system-components'
import {
  Image
} from './'
const size = 48
const actualSize = size * 2
export const Avatar = sys({
  is: Image,
  size,
  borderRadius: '99999px',
  source: {uri: `https://via.placeholder.com/${actualSize}x${actualSize}`}
// }, {
//   display: 'inline-block'
},
'space',
'color',
'size'
)

Avatar.displayName = 'Avatar'

export default Avatar
