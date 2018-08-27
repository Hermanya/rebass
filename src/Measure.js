import React from 'react'
import sys from 'native-system-components'
import {Box, Text} from './'

const MeasureHelper = ({children, textProps = {}, ...props}) =>
  <Box {...props}>
    {typeof children === 'string'
      ? <Text {...textProps}>{children}</Text> : children}
  </Box>

export const Measure = sys({
  is: MeasureHelper,
  maxWidth: 256
}, 'maxWidth')

Measure.displayName = 'Measure'

export default Measure
