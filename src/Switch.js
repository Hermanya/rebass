import sys from 'native-system-components'
import { theme } from 'styled-system'
import {Touchable, Animated} from 'react-primitives'
const Thumb = () => sys({
  is: Animated.View,
  borderRadius: '99999px'
}, props => ({
  width: '16px',
  height: '16px',
  margin: '4px',
  borderRadius: '99999px',
  // transitionProperty: 'transform, color',
  // transitionDuration: '.1s',
  // transitionTimingFunction: 'ease-out',
  transform: `translateX(${props.thumbOffset}px)`,
  backgroundColor: props.checked
    ? theme('colors.white')(props)
    : theme('colors.' + props.color)(props)
}))

const Track = () => sys({
  borderRadius: '99999px'
}, props => ({
 // display: 'inline-flex',
 width: '40px',
 height: '24px',
 backgroundColor: props.checked
   ? theme('colors.' + props.color)(props)
   : 'transparent',
 // boxShadow: 'inset 0 0 0 2px',
 // transitionProperty: 'background-color',
 // transitionDuration: '.2s',
 // transitionTimingFunction: 'ease-out',
 // userSelect: 'none',
}))

class SwichHelper {
  state={
    on: false,
    thumbOffset: new Animated.Value(0)
  }
  render() {
    const {on} = this.state
    return <Touchable onPress={this.handleClick}>
      <Track checked={on}>
        <Thumb checked={on} thumbOffset={this.state.thumbOffset}></Thumb>
      </Track>
    </Touchable>
  }
  handleClick = () => {
    if (this.state.on) {
      Animated.timing(this.state.thumbOffset, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start();
      this.setState({
        on: false
      })
    } else {
      Animated.timing(this.state.thumbOffset, {
        toValue: 16,
        duration: 500,
        useNativeDriver: true
      }).start();
      this.setState({
        on: true
      })
    }
  }
}

export const Switch = sys({
  is:  SwichHelper,
  role: 'checkbox',
}, 'space')

Switch.displayName = 'Switch'

export default Switch
