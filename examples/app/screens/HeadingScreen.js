
import React from 'react';
import RebassNative from 'rebass-native'

export const HeadingScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Heading</RebassNative.Heading>
  <RebassNative.Heading
  children='Hello'
/>

  <RebassNative.Code>{`<Heading
  children='Hello'
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Text](/components/Text) > [Text](/components/Text)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
fontSize | 5 | fontSizes | responsive
fontWeight | bold | fontWeights | responsive
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
fontFamily |  | fonts | responsive
color |  | colors | responsive
bg |  | colors | responsive
textAlign |  | N/A | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    