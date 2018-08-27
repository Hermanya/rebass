import sys from 'native-system-components'
import { Absolute } from './Position'

export const Modal = sys({
  is: Absolute,
  top: '50%',
  left: '50%',
  p: 3,
  bg: 'white',
  borderRadius: 2,
  // maxWidth: '100vw',
  // maxHeight: '100vh',
  elevation: 2

}, props => ({
  // boxShadow: `0 0 0 60vmax ${themeGet('colors.darken')(props)}, 0 0 32px ${themeGet('colors.darken')(props)}`,
  // overflow: 'auto',
  transform: `translateX(-${props.width / 2}px) translateY(-50px)`
}),
'width',
'maxWidth',
'maxHeight'
)
Modal.displayName = 'Modal'

export default Modal
