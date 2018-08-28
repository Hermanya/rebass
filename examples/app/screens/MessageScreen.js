
import React from 'react';
import RebassNative from 'rebass-native'

export const MessageScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Message</RebassNative.Heading>
  <RebassNative.Message>
  Hello
</RebassNative.Message>

  <RebassNative.Code>{`<Message>
  Hello
</Message>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [MessageHelper](/components/MessageHelper)`}</RebassNative.Text>
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
color |  | colors | responsive
bg | blue | colors | responsive
flexDirection | row | N/A | responsive
alignItems | center | N/A | responsive
minHeight | 48px | minHeights | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    