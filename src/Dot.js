import sys from 'native-system-components'

export const Dot = sys({
  // is: 'button',
  m: 0,
  p: 0,
  size: 16,
  bg: 'grey',
  borderRadius: 99999,
  border: 4,
  borderColor: 'transparent'
  // focus: {
  //   backgroundColor: 'blue'
  // },
  // hover: {
  //   backgroundColor: 'blue'
  // },
  // disabledStyle: {
  //   opacity: 1/4
  // }
// }, {
//   appearance: 'none',
//   backgroundClip: 'padding-box'
},
'size',
'space',
'color'
)

Dot.displayName = 'Dot'

export default Dot
