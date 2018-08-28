
import React from 'react';
import RebassNative from 'rebass-native'

export const ButtonCircleScreen = () => <RebassNative.Box>
  <RebassNative.Heading>ButtonCircle</RebassNative.Heading>
  <RebassNative.ButtonCircle
  children='Hello'
/>

  <RebassNative.Code>{`<ButtonCircle
  children='Hello'
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Button](/components/Button) > [Box](/components/Box)`}</RebassNative.Text>
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
borderRadius | 9999 | radii | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    