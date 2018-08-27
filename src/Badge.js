import React from 'react'
import sys from 'native-system-components'
import {Box, Text} from './'
export class BadgeHelper extends React.Component {
  render () {
    const {children, textProps, ...props} = this.props
    return (
      <Box {...props}>
        {typeof children === 'string' ? <Text
          {...textProps}
        >{children}</Text> : children}
      </Box>
    )
  }
}

export const Badge = sys({
  is: BadgeHelper,
  // fontSize: 0,
  px: 2,
  py: 1,
  mx: 1,
  bg: 'blue',
  borderRadius: 2,
  textProps: {
    fontSize: 0,
    fontWeight: 'bold',
    color: 'white'
  }
}, {
  // WebkitFontSmoothing: 'antialiased',
  // display: 'inline-block',
  // verticalAlign: 'middle'
})

Badge.displayName = 'Badge'

export default Badge
