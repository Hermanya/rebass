
import React from 'react';
import RebassNative from 'rebass-native'

export const ImageScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Image</RebassNative.Heading>
  <RebassNative.Image
  src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
/>

  <RebassNative.Code>{`<Image
  src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Image](http://jxnblk.com/rebass/components/Image)`}</RebassNative.Text>
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
width |  | N/A | responsive
color |  | colors | responsive
bg |  | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    