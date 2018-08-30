import sys from 'native-system-components'
import ButtonTransparent from './ButtonTransparent'
export const Close = sys({
  is: ButtonTransparent,
  p: 0,
  children: '×',
  textProps: {
    fontSize: 3,
    color: 'black'
  }
}, {
  width: '24px',
  height: '24px'
})

Close.displayName = 'Close'

export default Close
