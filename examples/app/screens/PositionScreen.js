
import React from 'react';
import RebassNative from 'rebass-native'

export const PositionScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Position</RebassNative.Heading>
  <RebassNative.Position
  p={3}
  bg='green'
  position='relative'>
  Hello
</RebassNative.Position>

  <RebassNative.Code>{`<Position
  p={3}
  bg='green'
  position='relative'>
  Hello
</Position>
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
my |  | space | responsive
p |  | space | responsive
pt |  | space | responsive
pr |  | space | responsive
pb |  | space | responsive
pl |  | space | responsive
px |  | space | responsive
py |  | space | responsive
color |  | colors | responsive
bg |  | colors | responsive
zIndex |  | N/A | responsive
top |  | N/A | responsive
right |  | N/A | responsive
bottom |  | N/A | responsive
left |  | N/A | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    