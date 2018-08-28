
import React from 'react';
import RebassNative from 'rebass-native'

export const ButtonScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Button</RebassNative.Heading>
  <RebassNative.Button
  children='Hello'
/>

  <RebassNative.Code>{`<Button
  children='Hello'
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](/components/Box)`}</RebassNative.Text>
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
px | 3 | space | responsive
py | 2 | space | responsive
color |  | colors | responsive
bg | blue | colors | responsive
borderRadius | 2 | radii | responsive
border |  | borders | responsive
borderTop |  | borders | responsive
borderRight |  | borders | responsive
borderBottom |  | borders | responsive
borderLeft |  | borders | responsive
justifyContent | center | N/A | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    