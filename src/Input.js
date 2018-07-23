import sys from 'native-system-components'
import { theme } from 'styled-system'
import {TextInput} from 'react-native'
import {Platform} from 'react-primitives'
import Text from './Text'

export const Input = sys({
  is: {
    web: 'input',
    android: TextInput,
    ios: TextInput
  }[Platform.OS] || View,
  type: 'text',
  // fontSize: 'inherit',
  // lineHeight: 'inherit',
  px: 1,
  py: 2,
  m: 0,
  // width: 1,
  borderWidth: 2,
  borderColor: 'gray',
  // boxShadow: 1,
  borderRadius: 2,
  // color: 'inherit',
  underlineColorAndroid:'transparent',
  bg: 'transparent'
}, props => ({
//   fontFamily: 'inherit',
//   display: 'inline-block',
//   verticalAlign: 'middle',
//   border: 0,
//   appearance: 'none',
//   '&:focus': {
//     outline: 'none',
//     boxShadow: `inset 0 0 0 1px ${theme('colors.blue')(props)}`,
//   },
//   '&:disabled': {
//     opacity: 1/4
  }), 'width'
)

Input.displayName = 'Input'

export default Input
