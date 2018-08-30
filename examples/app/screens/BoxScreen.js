
import React from 'react';
import {ScrollView} from 'react-native'
import * as RebassNative from 'rebass-native'

export class BoxScreen extends React.Component {
  static navigationOptions = {
    title: 'Box',
  };
  render () {
    return (
      <ScrollView>
        <RebassNative.Subhead mx={4} my={2}>Demo</RebassNative.Subhead>
        <RebassNative.Banner bg="white">
        <RebassNative.Box
  px={3}
  py={4}
  textProps={{color: 'white'}}
  bg='blue'>
  Hello
</RebassNative.Box>

        </RebassNative.Banner>

        <RebassNative.Subhead mx={4} my={2}>Code</RebassNative.Subhead>
        <RebassNative.Code bg="black" color="lime" p={4}>{`<Box
  px={3}
  py={4}
  textProps={{color: 'white'}}
  bg='blue'>
  Hello
</Box>
`}</RebassNative.Code>

        <RebassNative.Subhead mx={4} my={2}>Inheritance</RebassNative.Subhead>
        <RebassNative.Flex px={4} flexDirection="row"><RebassNative.ButtonOutline onPress={() => {
    // open http://jxnblk.com/rebass/components/Box
  }}>Box</RebassNative.ButtonOutline></RebassNative.Flex>

        <RebassNative.Subhead mx={4} my={2}>Props</RebassNative.Subhead>
        
      </ScrollView>
    )
  }
}
    