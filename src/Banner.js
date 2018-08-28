import React from 'react'
import sys from 'native-system-components'
import { Flex, Text } from './'

export const Banner = sys({
  is: Flex,
  p: 3,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  minHeight: 100,
  // color: 'white',
  bg: 'black',
  children: <Text color='white'>Banner</Text>
},
'minHeight',
'backgroundSize',
'backgroundPosition',
'backgroundImage'
)

Banner.displayName = 'Banner'

export default Banner
