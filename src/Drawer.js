import sys from 'native-system-components'
import { Box } from 'native-grid-styled'

export const side = ({ side }) => {
  if (!['left', 'right', 'top', 'bottom'].includes(side)) {
    return {
      top: 0,
      left: 0,
      bottom: 0
    }
  }
  const top = /^(top|left|right)$/.test(side) ? 0 : null
  const bottom = /^(bottom|left|right)$/.test(side) ? 0 : null
  const left = /^(left|top|bottom)$/.test(side) ? 0 : null
  const right = /^(right|top|bottom)$/.test(side) ? 0 : null

  return {
    top,
    bottom,
    left,
    right
  }
}

export const transform = ({
  open,
  side,
  width
}) => {
  const transforms = {
    left: `translateX(-${width}px)`,
    right: `translateX(${width}px)`,
    top: `translateY(-${width}px)`,
    bottom: `translateY(${width}px)`
  }
  return ({
    transform: open ? null : transforms[side] || transforms.left
  })
}

export const Drawer = sys({
  is: Box,
  blacklist: [
    'side',
    'open'
  ],
  position: 'absolute',
  bg: 'black',
  open: false,
  side: 'bottom',
  width: 320
}, side,
transform,
'zIndex',
'height',
{
  // transform: {translateX: -320}

  // overflowX: 'hidden',
  // overflowY: 'auto',
  // transitionProperty: 'transform',
  // transitionDuration: '.2s',
  // transitionTimingFunction: 'ease-out'
}
)

Drawer.displayName = 'Drawer'

export default Drawer
