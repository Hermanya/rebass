
import React from 'react';
import RebassNative from 'rebass-native'

export const TabScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Tab</RebassNative.Heading>
  <RebassNative.Tab borderColor='blue'>
  Hello
</RebassNative.Tab>

  <RebassNative.Code>{`<Tab borderColor='blue'>
  Hello
</Tab>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [TabHelper](/components/TabHelper)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
m |  | space | responsive
mt |  | space | responsive
mr | 3 | space | responsive
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
py | 2 | space | responsive
borderColor | transparent | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    