import sys from 'native-system-components'

export const Position = sys(
  'space',
  'color',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left'
)

Position.displayName = 'Position'

export const Absolute = sys({
  is: Position
}, {
  position: 'absolute'
})
Absolute.displayName = 'Absolute'


export default Position
