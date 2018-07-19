import sys from 'native-system-components'
import Button from './Button'

export const ButtonTransparent = sys({
  is: Button,
  bg: 'transparent',
  // focus: {
  //   outline: 'none',
  //   boxShadow: 'none',
  //   color: 'blue',
  // }
})

ButtonTransparent.displayName = 'ButtonTransparent'

export default ButtonTransparent
