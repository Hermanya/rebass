import React from 'react'
import sys from 'native-system-components'
import { themeGet } from 'styled-system'
import { Touchable, View } from 'react-primitives'
import Text from './Text'
const ButtonBody = sys({
  is: View,
  m: 0,
  px: 3,
  py: 2,
  bg: 'blue',
  borderRadius: 2,
  border: 0,
  justifyContent: 'center'
},
props => ({
  borderWidth: 2,
  borderColor: themeGet(`colors.${props.bg}`, props.bg)(props),
  borderStyle: 'solid'
}),
props => ({
  // fontFamily: 'inherit',
  // WebkitFontSmoothing: 'antialiased',
  // display: 'inline-block',
  // verticalAlign: 'middle',
  // textDecoration: 'none',
  // appearance: 'none',
  // '&:disabled': {
  //   opacity: 1 / 4,
  // },
}),
props => ({
  // '&:focus': {
  //   outline: 'none',
  //   boxShadow: `0 0 0 2px ${themeGet(`colors.${props.bg}`, props.bg)(props)}`,
  // },
}))

const ButtomText = sys({
  is: Text,
  fontSize: 1,
  fontWeight: 'bold',
  // lineHeight: 16 / 14,
  color: 'white',
  textAlign: 'center'
}, 'color')

export const Button = ({ children, textColor, onPress, disabled, ...props }) => {
  return (<Touchable onPress={onPress} disabled={disabled}>
    <ButtonBody {...props}>
      {typeof children === 'string'
        ? (
          <ButtomText color={textColor}>
            {children}
          </ButtomText>
        ) : children}
    </ButtonBody>
  </Touchable>
  )
}

Button.displayName = 'Button'

export default Button
