import sys from 'native-system-components'
import {Platform} from 'react-primitives'
import {Box} from './'
export const Position = sys({
  is: Box
}, 'space', 'color', 'zIndex', 'top', 'right', 'bottom', 'left'
)

Position.displayName = 'Position'

export const Absolute = sys({
  is: Position
}, {
  position: 'absolute'
})
Absolute.displayName = 'Absolute'

export const Relative = sys({
  is: Position
}, Platform.OS === 'web' ? {
  position: 'relative'
} : {})
Relative.displayName = 'Relative'

export default Position
