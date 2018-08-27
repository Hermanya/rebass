import React from 'react'
import sys from 'native-system-components'
import {Touchable} from 'react-primitives'
import {Text, Box} from './'

class TabHelper extends React.Component {
  render () {
    const {children, touchableProps, textProps, ...props} = this.props
    return (
      <Box {...props}>
        <Touchable {...touchableProps}>
          {typeof children === 'string'
            ? <Text {...textProps}>{children}</Text>
            : children}
        </Touchable>
      </Box>
    )
  }
}

export const Tab = sys({
  is: TabHelper,

  mr: 3,
  py: 2,
  borderBottomWidth: 2,
  borderStyle: 'solid',
  borderColor: 'transparent',
  touchableProps: {},
  textProps: {
    fontWeight: 'bold'
  }
}, {
  textDecoration: 'none'
})

Tab.displayName = 'Tab'

export default Tab
