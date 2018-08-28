
import React from 'react';
import RebassNative from 'rebass-native'

export const DividerScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Divider</RebassNative.Heading>
  <RebassNative.Divider
  w={1}
  borderColor='blue'
/>

  <RebassNative.Code>{`<Divider
  w={1}
  borderColor='blue'
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](/components/Box) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
m |  | space | responsive
mt |  | space | responsive
mr |  | space | responsive
mb |  | space | responsive
ml |  | space | responsive
mx |  | space | responsive
my | 3 | space | responsive
p |  | space | responsive
pt |  | space | responsive
pr |  | space | responsive
pb |  | space | responsive
pl |  | space | responsive
px |  | space | responsive
py |  | space | responsive
borderColor | gray | colors | responsive
color |  | colors | responsive
bg |  | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    