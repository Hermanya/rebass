import sys from 'native-system-components'
import { themeGet } from 'styled-system'
import Button from './Button'

export const ButtonOutline = sys({
  is: Button,
  bg: 'transparent'
  // hover: {
  //   color: 'white',
  //   backgroundColor: 'blue',
  // }
}, props => ({
  borderWidth: 2,
  borderColor: themeGet('colors.' + props.textColor, props.textColor)(props),
  borderStyle: 'solid'
}))

ButtonOutline.displayName = 'ButtonOutline'

export default ButtonOutline
