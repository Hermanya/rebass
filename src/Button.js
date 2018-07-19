import sys from 'native-system-components'
import { themeGet } from 'styled-system'
import { Touchable } from 'react-primitives'

export const Button = sys({
  is: Touchable,
  fontSize: 1,
  fontWeight: 'bold',
  lineHeight: 16/14,
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  borderRadius: 2,
  border: 0
},
  props => ({
    fontFamily: 'inherit',
    WebkitFontSmoothing: 'antialiased',
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',
    textDecoration: 'none',
    appearance: 'none',
    '&:disabled': {
      opacity: 1/4
    },
  }),
  props => ({
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${themeGet('colors.' + props.bg, props.bg)(props)}`
    }
  })
)

Button.displayName = 'Button'

export default Button
