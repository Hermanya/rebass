import sys from 'native-system-components'
import {Image as PrimitiveImage} from 'react-primitives'
export const Image = sys({
  is: PrimitiveImage
}, {
  // display: 'block',
  // maxWidth: '100%',
  // height: 'auto'
},
'space',
'width',
'color'
)

Image.displayName = 'Image'

export default Image
