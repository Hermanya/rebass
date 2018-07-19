import sys from 'native-system-components'
import {Image} from 'react-primitives'
export const Avatar = sys({
  is: Image,
  size: 48,
  borderRadius: '99999px',
}, {
  display: 'inline-block'
},
  'space',
  'color',
  'size',
)

Avatar.displayName = 'Avatar'

export default Avatar
