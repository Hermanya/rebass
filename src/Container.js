import sys from 'native-system-components'
import { Box } from './'

export const Container = sys({
  is: Box,
  px: 3,
  mx: 'auto',
  maxWidth: 1024
},
'maxWidth'
)

Container.displayName = 'Container'

export default Container
