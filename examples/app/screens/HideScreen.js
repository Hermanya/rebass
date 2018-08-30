
import React from 'react';
import {ScrollView} from 'react-native'
import * as RebassNative from 'rebass-native'

export class HideScreen extends React.Component {
  static navigationOptions = {
    title: 'Hide',
  };
  render () {
    return (
      <ScrollView>
        <RebassNative.Subhead mx={4} my={2}>Demo</RebassNative.Subhead>
        <RebassNative.Banner bg="white">
        <RebassNative.Hide p={2} bg='blue' xsmall>Hide xsmall</RebassNative.Hide>
<RebassNative.Hide p={2} bg='green' small>Hide small</RebassNative.Hide>
<RebassNative.Hide p={2} bg='yellow' medium>Hide medium</RebassNative.Hide>
<RebassNative.Hide p={2} bg='orange' large>Hide large</RebassNative.Hide>
<RebassNative.Hide p={2} bg='red' xlarge>Hide xlarge</RebassNative.Hide>

        </RebassNative.Banner>

        <RebassNative.Subhead mx={4} my={2}>Code</RebassNative.Subhead>
        <RebassNative.Code bg="black" color="lime" p={4}>{`<Hide p={2} bg='blue' xsmall>Hide xsmall</Hide>
<Hide p={2} bg='green' small>Hide small</Hide>
<Hide p={2} bg='yellow' medium>Hide medium</Hide>
<Hide p={2} bg='orange' large>Hide large</Hide>
<Hide p={2} bg='red' xlarge>Hide xlarge</Hide>
`}</RebassNative.Code>

        <RebassNative.Subhead mx={4} my={2}>Inheritance</RebassNative.Subhead>
        <RebassNative.Flex px={4} flexDirection="row"></RebassNative.Flex>

        <RebassNative.Subhead mx={4} my={2}>Props</RebassNative.Subhead>
        
      </ScrollView>
    )
  }
}
    