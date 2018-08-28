
import React from 'react';
import RebassNative from 'rebass-native'

export const PreScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Pre</RebassNative.Heading>
  <RebassNative.Pre
  children="const hello = 'Rebass'"
/>

  <RebassNative.Code>{`<Pre
  children="const hello = 'Rebass'"
/>
`}</RebassNative.Code>
  <RebassNative.Text>{``}</RebassNative.Text>
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
    