
import React from 'react';
import RebassNative from 'rebass-native'

export const BorderScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Border</RebassNative.Heading>
  <RebassNative.Border
  py={2}
  top
  bottom>
  Hello
</RebassNative.Border>

  <RebassNative.Code>{`<Border
  py={2}
  top
  bottom>
  Hello
</Border>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](/components/Box) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
borderColor | gray | colors | responsive
m |  | space | responsive
mt |  | space | responsive
mr |  | space | responsive
mb |  | space | responsive
ml |  | space | responsive
mx |  | space | responsive
my |  | space | responsive
p |  | space | responsive
pt |  | space | responsive
pr |  | space | responsive
pb |  | space | responsive
pl |  | space | responsive
px |  | space | responsive
py |  | space | responsive
width |  | N/A | responsive
color |  | colors | responsive
bg |  | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    