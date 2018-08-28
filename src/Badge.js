import sys from 'native-system-components'
// import {themeGet} from 'styled-system'
import {Platform} from 'react-primitives'
import {Box} from './'

export const Badge = sys({
  is: Box,
  px: 2,
  py: 1,
  mx: 1,
  bg: 'blue',
  borderRadius: 2,
  children: 'Badge',
  textProps: {
    fontSize: 0,
    fontWeight: 'bold',
    color: 'white'
  }
}, props => ({
  // lineHeight: (themeGet('fontSizes.' + props.textProps.fontSize, 16) * 1.25) + 'px'
}), Platform.OS === 'web' ? {
  WebkitFontSmoothing: 'antialiased',
  display: 'inline-block'
} : {})

Badge.displayName = 'Badge'

export default Badge
