import React from 'react'
import { ThemeProvider } from 'styled-components'
import { View } from 'react-primitives'
import defaultTheme from './theme'

export class Provider extends React.Component {
  render () {
    const {
      theme,
      ...props
    } = this.props

    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <View {...props} />
      </ThemeProvider>
    )
  }
}

Provider.defaultProps = {
  theme: {}
}

Provider.displayName = 'Rebass.Provider'

export default Provider
