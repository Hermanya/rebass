import React from 'react'
import sys from 'native-system-components'
import {Touchable} from 'react-primitives'
import {Text, Box} from './'

class TabHelper extends React.Component {
  render () {
    const {children, touchableProps = {}, ...props} = this.props
    return (
      <Box {...props}>
        <Touchable {...touchableProps}>
          {typeof children === 'string' ? <Text>{children}</Text> : children}
        </Touchable>
      </Box>
    )
  }
}

export const Tab = sys({
  is: TabHelper,
  fontWeight: 'bold',
  mr: 3,
  py: 2,
  borderBottomWidth: 2,
  borderStyle: 'solid',
  borderColor: 'transparent'
}, {
  textDecoration: 'none'
})

Tab.displayName = 'Tab'

export default Tab
