import React from 'react'
import sys from 'native-system-components'
import Text from './Text'
export const BadgeBody = sys({
  // fontSize: 0,
  px: 2,
  py: 1,
  mx: 1,
  // color: 'white',
  bg: 'blue',
  // fontWeight: 'bold',
  borderRadius: 2
}, {
  // WebkitFontSmoothing: 'antialiased',
  // display: 'inline-block',
  // verticalAlign: 'middle'
})

export class Badge extends React.Component {
  render() {
    const {children, ...props} = this.props
    return (
      <BadgeBody {...props}>
  {typeof children === 'string' ? <Text
    fontSize={0}
    fontWeight="bold"
    color="white"
    >{children}</Text> : children}
</BadgeBody>
    );
  }
}

Badge.displayName = 'Badge'

export default Badge
