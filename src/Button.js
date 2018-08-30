import React from 'react'
import sys from 'native-system-components'
import { themeGet } from 'styled-system'
import { Touchable, Platform } from 'react-primitives'
import {Text, Box} from './'

const defaultTextProps = {
  fontSize: 1,
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center'
}

class ButtonHelper extends React.Component {
  render () {
    const { children, textProps, onPress, disabled, ...props } = this.props
    return (
      <Box {...props}>
        <Touchable
          // onPress={disabled ? undefined : onPress}
          onPress={onPress}
        >
          {typeof children === 'string'
            ? (
              <Text {...defaultTextProps} {...textProps}> {children}</Text>
            ) : children}
        </Touchable>
      </Box>
    )
  }
}

ButtonHelper.displayName = 'Box'

export const Button = sys({
  is: ButtonHelper,
  m: 0,
  px: 3,
  py: 2,
  bg: 'blue',
  borderRadius: 2,
  border: 0,
  justifyContent: 'center',
  textProps: {}
},
props => ({
  opacity: props.disabled ? 1 / 4 : 1,
  borderWidth: 2,
  borderColor: themeGet(`colors.${props.bg}`, props.bg)(props),
  borderStyle: 'solid'
}),
Platform.OS === 'web' ? {
  display: 'inline-block'
} : {})

Button.displayName = 'Button'

export default Button
