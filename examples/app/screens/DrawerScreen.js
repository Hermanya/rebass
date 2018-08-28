
import React from 'react';
import RebassNative from 'rebass-native'

export const DrawerScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Drawer</RebassNative.Heading>
  <RebassNative.div>
  <Drawer
    open={false}
    side='right'
    p={3}
    color='white'
    bg='black'>
    <Heading>Hello</RebassNative.Heading>
  </Drawer>
</div>

  <RebassNative.Code>{`<div>
  <Drawer
    open={false}
    side='right'
    p={3}
    color='white'
    bg='black'>
    <Heading>Hello</Heading>
  </Drawer>
</div>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
position | absolute | N/A | responsive
color |  | colors | responsive
bg | black | colors | responsive
width | 320 | N/A | responsive
zIndex |  | N/A | responsive
height |  | heights | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    