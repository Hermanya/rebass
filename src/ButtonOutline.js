import sys from 'native-system-components'
import { themeGet } from 'styled-system'
import Button from './Button'

export const ButtonOutline = sys({
  is: Button,
  bg: 'transparent',
  textProps: {
    color: 'black'
  }
}, props => ({
  borderWidth: 2,
  borderColor: themeGet('colors.' + props.textProps.color, props.textProps.color)(props),
  borderStyle: 'solid'
}))

ButtonOutline.displayName = 'ButtonOutline'

export default ButtonOutline
