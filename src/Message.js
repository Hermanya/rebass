import React from 'react'
import sys from 'native-system-components'
import { Flex } from 'native-grid-styled'
import Text from './Text'

class MessageHelper extends React.Component {
  render () {
    const {children, textProps, ...props} = this.props
    return (
      <Flex {...props}>
        {typeof children === 'string'
          ? <Text {...textProps}>{children}</Text> : children}
      </Flex>
    )
  }
}

export const Message = sys({
  is: MessageHelper,
  px: 3,
  py: 2,
  bg: 'blue',
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: '48px',
  textProps: {
    fontWeight: 'bold',
    color: 'white'
  }
}, 'minHeight', {
  // WebkitFontSmoothing: 'antialiased',
})

Message.displayName = 'Message'

export default Message
