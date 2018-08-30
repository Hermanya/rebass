
import React from 'react';
import {ScrollView} from 'react-native'
import * as RebassNative from 'rebass-native'

export class AbsoluteScreen extends React.Component {
  static navigationOptions = {
    title: 'Absolute',
  };
  render () {
    return (
      <ScrollView>
        <RebassNative.Subhead mx={4} my={2}>Demo</RebassNative.Subhead>
        <RebassNative.Banner bg="white">
        <RebassNative.Relative minHeight={100}>
  <RebassNative.Absolute bottom={0} right={0}>
    Hello
  </RebassNative.Absolute>
</RebassNative.Relative>

        </RebassNative.Banner>

        <RebassNative.Subhead mx={4} my={2}>Code</RebassNative.Subhead>
        <RebassNative.Code bg="black" color="lime" p={4}>{`<Relative minHeight={100}>
  <Absolute bottom={0} right={0}>
    Hello
  </Absolute>
</Relative>
`}</RebassNative.Code>

        <RebassNative.Subhead mx={4} my={2}>Inheritance</RebassNative.Subhead>
        <RebassNative.Flex px={4} flexDirection="row"><RebassNative.ButtonOutline onPress={() => {
    this.props.navigation.navigate('PositionScreen')
  }}>Position</RebassNative.ButtonOutline><RebassNative.Text> → </RebassNative.Text><RebassNative.ButtonOutline onPress={() => {
    this.props.navigation.navigate('BoxScreen')
  }}>Box</RebassNative.ButtonOutline><RebassNative.Text> → </RebassNative.Text><RebassNative.ButtonOutline onPress={() => {
    this.props.navigation.navigate('BoxScreen')
  }}>Box</RebassNative.ButtonOutline></RebassNative.Flex>

        <RebassNative.Subhead mx={4} my={2}>Props</RebassNative.Subhead>
        
      </ScrollView>
    )
  }
}
    