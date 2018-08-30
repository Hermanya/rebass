
import React from 'react';
import {ScrollView} from 'react-native'
import * as RebassNative from 'rebass-native'

export class MeasureScreen extends React.Component {
  static navigationOptions = {
    title: 'Measure',
  };
  render () {
    return (
      <ScrollView>
        <RebassNative.Subhead mx={4} my={2}>Demo</RebassNative.Subhead>
        <RebassNative.Banner bg="white">
        <RebassNative.Measure>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</RebassNative.Measure>

        </RebassNative.Banner>

        <RebassNative.Subhead mx={4} my={2}>Code</RebassNative.Subhead>
        <RebassNative.Code bg="black" color="lime" p={4}>{`<Measure>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Measure>
`}</RebassNative.Code>

        <RebassNative.Subhead mx={4} my={2}>Inheritance</RebassNative.Subhead>
        <RebassNative.Flex px={4} flexDirection="row"><RebassNative.ButtonOutline onPress={() => {
    this.props.navigation.navigate('MeasureHelperScreen')
  }}>MeasureHelper</RebassNative.ButtonOutline></RebassNative.Flex>

        <RebassNative.Subhead mx={4} my={2}>Props</RebassNative.Subhead>
        <RebassNative.Row flexWrap="wrap" justifyContent="space-between" px={4}>

    <RebassNative.Column flexGrow={1} width={1/3}>
        <RebassNative.Lead>prop</RebassNative.Lead>
      </RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>
        <RebassNative.Lead>default</RebassNative.Lead>
      </RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>
        <RebassNative.Lead>theme key</RebassNative.Lead>
      </RebassNative.Column>
  

    <RebassNative.Column flexGrow={1} width={1/3}>maxWidth</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>256</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>maxWidths</RebassNative.Column>
    
</RebassNative.Row>
      </ScrollView>
    )
  }
}
    