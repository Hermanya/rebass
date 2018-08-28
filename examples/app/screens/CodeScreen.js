
import React from 'react';
import RebassNative from 'rebass-native'

export const CodeScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Code</RebassNative.Heading>
  <RebassNative.Code
  children='<Hello />'
/>

  <RebassNative.Code>{`<Code
  children='<Hello />'
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Text](/components/Text) > [Text](/components/Text)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
fontSize | 1 | fontSizes | responsive
fontFamily | monospace | fonts | responsive
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
bg |  | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    