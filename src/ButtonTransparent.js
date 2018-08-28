import sys from 'native-system-components'
import Button from './Button'

export const ButtonTransparent = sys({
  is: Button,
  bg: 'transparent'
})

ButtonTransparent.displayName = 'ButtonTransparent'

export default ButtonTransparent
