
import React from 'react';
import RebassNative from 'rebass-native'

export const AvatarScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Avatar</RebassNative.Heading>
  <RebassNative.Avatar
  size={32}
  source={{uri: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'}}
/>

  <RebassNative.Code>{`<Avatar
  size={32}
  source={{uri: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'}}
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Image](/components/Image) > [Image](/components/Image)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
size | 48 | N/A | responsive
borderRadius | 99999px | radii | responsive
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
    