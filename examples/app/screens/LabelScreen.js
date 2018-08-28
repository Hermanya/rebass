
import React from 'react';
import RebassNative from 'rebass-native'

export const LabelScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Label</RebassNative.Heading>
  <RebassNative.Label>
  Hello Label
</RebassNative.Label>

  <RebassNative.Code>{`<Label>
  Hello Label
</Label>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Text](/components/Text) > [Text](/components/Text)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
fontSize | 1 | fontSizes | responsive
m |  | space | responsive
mt |  | space | responsive
mr |  | space | responsive
mb | 1 | space | responsive
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
alignItems |  | N/A | responsive
color |  | colors | responsive
bg |  | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    