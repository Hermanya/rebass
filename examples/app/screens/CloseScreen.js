
import React from 'react';
import RebassNative from 'rebass-native'

export const CloseScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Close</RebassNative.Heading>
  <RebassNative.Close />

  <RebassNative.Code>{`<Close />
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [ButtonTransparent](/components/ButtonTransparent) > [Button](/components/Button) > [Box](/components/Box)`}</RebassNative.Text>
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
py | 2 | space | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    