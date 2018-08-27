import React from 'react'
import sys from 'native-system-components'
import { themeGet } from 'styled-system'
import { Touchable } from 'react-primitives'
import {Text, Box} from './Text'

class ButtomHelper extends React.Component {
  render () {
    const { children, textProps, onPress, disabled, ...props } = this.props
    return (
      <Box {...props}>
        <Touchable onPress={disabled ? undefined : onPress}>
          {typeof children === 'string'
            ? (
              <Text {...textProps}> {children}</Text>
            ) : children}
        </Touchable>
      </Box>
    )
  }
}

export const Button = sys({
  is: ButtomHelper,
  m: 0,
  px: 3,
  py: 2,
  bg: 'blue',
  borderRadius: 2,
  border: 0,
  justifyContent: 'center',
  textProps: {
    fontSize: 1,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
},
props => ({
  opacity: props.disabled ? 1 / 4 : 1,
  borderWidth: 2,
  borderColor: themeGet(`colors.${props.bg}`, props.bg)(props),
  borderStyle: 'solid'
}))

Button.displayName = 'Button'

export default Button
