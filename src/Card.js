import sys from 'native-system-components'
import {Platform} from 'react-primitives'

const shadow = {
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  android: {
    elevation: 2,
  },
  web: {
    boxShadow: 2
  }
}[Platform.OS] || {}
export const Card = sys({
  p: 2,
  bg: 'white',
  borderRadius: 2,
  ...shadow
// }, {
//   overflow: 'hidden'
}, 'space', 'color')

Card.displayName = 'Card'

export default Card
