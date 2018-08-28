
import React from 'react';
import RebassNative from 'rebass-native'

export const ProgressScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Progress</RebassNative.Heading>
  <RebassNative.Progress
  value={1/3}
/>

  <RebassNative.Code>{`<Progress
  value={1/3}
/>
`}</RebassNative.Code>
  <RebassNative.Text>{``}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
width | 1 | N/A | responsive
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
bg | gray | colors | responsive
borderRadius | 2 | radii | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    