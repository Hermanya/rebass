
import React from 'react';
import RebassNative from 'rebass-native'

export const TextScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Text</RebassNative.Heading>
  <RebassNative.Text
  textAlign='center'
  fontWeight='bold'
  children='Hello'
/>

  <RebassNative.Code>{`<Text
  textAlign='center'
  fontWeight='bold'
  children='Hello'
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Text](http://jxnblk.com/rebass/components/Text)`}</RebassNative.Text>
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
fontFamily |  | fonts | responsive
fontSize |  | fontSizes | responsive
fontWeight |  | fontWeights | responsive
textAlign |  | N/A | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    