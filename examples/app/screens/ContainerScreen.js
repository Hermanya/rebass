
import React from 'react';
import RebassNative from 'rebass-native'

export const ContainerScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Container</RebassNative.Heading>
  <RebassNative.Container>
  Hello
</RebassNative.Container>

  <RebassNative.Code>{`<Container>
  Hello
</Container>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
m |  | space | responsive
mt |  | space | responsive
mr |  | space | responsive
mb |  | space | responsive
ml |  | space | responsive
mx | auto | space | responsive
my |  | space | responsive
p |  | space | responsive
pt |  | space | responsive
pr |  | space | responsive
pb |  | space | responsive
pl |  | space | responsive
px | 3 | space | responsive
py |  | space | responsive
maxWidth | 1024 | maxWidths | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    