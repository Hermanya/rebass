
import React from 'react';
import {ScrollView} from 'react-native'
import * as RebassNative from 'rebass-native'

export class AvatarScreen extends React.Component {
  static navigationOptions = {
    title: 'Avatar',
  };
  render () {
    return (
      <ScrollView>
        <RebassNative.Subhead mx={4} my={2}>Demo</RebassNative.Subhead>
        <RebassNative.Banner bg="white">
        <RebassNative.Avatar
  size={32}
  source={{uri: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'}}
/>

        </RebassNative.Banner>

        <RebassNative.Subhead mx={4} my={2}>Code</RebassNative.Subhead>
        <RebassNative.Code bg="black" color="lime" p={4}>{`<Avatar
  size={32}
  source={{uri: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'}}
/>
`}</RebassNative.Code>

        <RebassNative.Subhead mx={4} my={2}>Inheritance</RebassNative.Subhead>
        <RebassNative.Flex px={4} flexDirection="row"><RebassNative.ButtonOutline onPress={() => {
    this.props.navigation.navigate('ImageScreen')
  }}>Image</RebassNative.ButtonOutline><RebassNative.Text> → </RebassNative.Text><RebassNative.ButtonOutline onPress={() => {
    this.props.navigation.navigate('ImageScreen')
  }}>Image</RebassNative.ButtonOutline></RebassNative.Flex>

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
  

    <RebassNative.Column flexGrow={1} width={1/3}>size</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>48</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>N/A</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>borderRadius</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>99999px</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>radii</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>m</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>mt</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>mr</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>mb</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>ml</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>mx</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>my</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>p</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>pt</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>pr</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>pb</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>pl</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>px</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>py</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>space</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>color</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>colors</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>bg</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>colors</RebassNative.Column>
    
</RebassNative.Row>
      </ScrollView>
    )
  }
}
    