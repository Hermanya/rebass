import React from 'react'
import sys from 'native-system-components'
import {Box as SystemBox} from 'native-grid-styled'
import {Text} from './'
class BoxHelper extends React.Component {
  render () {
    const {children, textProps, ...props} = this.props
    return (
      <SystemBox {...props}>
        {typeof children === 'string' ? <Text
          {...textProps}
        >{children}</Text> : children}
      </SystemBox>
    )
  }
}
BoxHelper.displayName = 'Box'

export const Box = sys({
  is: BoxHelper,
  textProps: {}
})

Box.displayName = 'Box'

export default Box
