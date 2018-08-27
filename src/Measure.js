import React from 'react'
import sys from 'native-system-components'
import {Box, Text} from './'

const MeasureHelper = ({children}) => <Box>
  {typeof children === 'string' ? <Text>{children}</Text> : children}
</Box>

export const Measure = sys({
  is: MeasureHelper,
  maxWidth: '32em'
}, 'maxWidth')

Measure.displayName = 'Measure'

export default Measure
