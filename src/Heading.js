import React from 'react'
import sys from 'native-system-components'
import { Text } from 'react-primitives'
export const Heading = sys({
  is: Text,
  fontSize: 5,
  fontWeight: 'bold',
  // lineHeight: 1.25,
  m: 0
},
'fontFamily',
'color',
'textAlign'
)

Heading.displayName = 'Heading'

Heading.h1 = props => <Heading {...props} is={Text} />
Heading.h2 = props => <Heading {...props} is={Text} />
Heading.h3 = props => <Heading {...props} is={Text} />
Heading.h4 = props => <Heading {...props} is={Text} />
Heading.h5 = props => <Heading {...props} is={Text} />
Heading.h6 = props => <Heading {...props} is={Text} />

export default Heading
