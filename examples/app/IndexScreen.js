import React, { Component } from 'react'
import {
  Flex,
  ButtonTransparent
} from 'rebass-native'

export class IndexScreen extends Component {
  render () {
    return (<Flex flexDirection='column'>
      <ButtonTransparent
        onPress={() => this.props.navigation.navigate('Details')} // eslint-disable-line
      >Flex</ButtonTransparent>
    </Flex>)
  }
}
