
import React from 'react';
import {ScrollView} from 'react-native'
import * as RebassNative from 'rebass-native'

export class DotScreen extends React.Component {
  static navigationOptions = {
    title: 'Dot',
  };
  render () {
    return (
      <ScrollView>
        <RebassNative.Subhead mx={4} my={2}>Demo</RebassNative.Subhead>
        <RebassNative.Banner bg="white">
        <RebassNative.Flex>
  <RebassNative.Dot bg='black' />
  <RebassNative.Dot />
  <RebassNative.Dot />
</RebassNative.Flex>

        </RebassNative.Banner>

        <RebassNative.Subhead mx={4} my={2}>Code</RebassNative.Subhead>
        <RebassNative.Code bg="black" color="lime" p={4}>{`<Flex>
  <Dot bg='black' />
  <Dot />
  <Dot />
</Flex>
`}</RebassNative.Code>

        <RebassNative.Subhead mx={4} my={2}>Inheritance</RebassNative.Subhead>
        <RebassNative.Flex px={4} flexDirection="row"></RebassNative.Flex>

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
    

    <RebassNative.Column flexGrow={1} width={1/3}>size</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>16</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>N/A</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>color</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>colors</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>bg</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>grey</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>colors</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>borderRadius</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>99999</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>radii</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>border</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>4</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>borders</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>borderTop</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>borders</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>borderRight</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>borders</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>borderBottom</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>borders</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>borderLeft</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}></RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>borders</RebassNative.Column>
    

    <RebassNative.Column flexGrow={1} width={1/3}>borderColor</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>transparent</RebassNative.Column>
<RebassNative.Column flexGrow={1} width={1/3}>colors</RebassNative.Column>
    
</RebassNative.Row>
      </ScrollView>
    )
  }
}
    