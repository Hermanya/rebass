import sys from 'native-system-components'

export const Arrow = sys({
  direction: 'down'
}, props => {
  const borderTop = props.direction === 'down' ? { borderTopWidth: 7} : null
  const borderBottom = props.direction === 'up' ? { borderBottomWidth: 7 } : null
  return {
    // display: 'inline-block',
    width: 0,
    height: 0,
    // verticalAlign: 'middle',
    borderStyle: 'solid',
    borderRightColor: 'transparent',
    borderRightWidth: 5,
    borderLeftColor: 'transparent',
    borderLeftWidth: 5,
    ...borderTop,
    ...borderBottom
  }
}, 'space', 'color')

Arrow.displayName = 'Arrow'

export default Arrow
