import React from 'react'
import { ScrollView, View } from 'react-native'
import { Font } from 'expo'
import {
  Text,
  Provider
} from 'rebass-native'
import {RootStack} from './RootStack'

const theme = {
  colors: {
    blue: '#6785d0',
    violet: '#b75fb3',
    yellow: '#b88f3e',
    red: '#cb5658',
    green: '#64a85c'
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
    this.loadFonts()
      .then(() => this.setState({loading: false}))
  }
  loadFonts () {
    return Font.loadAsync({
      'monospace': require('./assets/fonts/SpaceMono-Regular.ttf')
    })
  }
  render () {
    if (this.state.loading) {
      return <View><Text>Loading!</Text></View>
    }
    return (
      <Provider theme={theme}>
        <ScrollView>
          <RootStack />
        </ScrollView>
      </Provider>
    )
  }
}
