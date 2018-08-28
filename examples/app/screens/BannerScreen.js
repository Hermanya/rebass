
import React from 'react';
import RebassNative from 'rebass-native'

export const BannerScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Banner</RebassNative.Heading>
  <RebassNative.Banner
  color='white'
  bg='darken'
  backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
  <Heading
    f={[ 4, 5, 6, 7 ]}>
    Hello
  </RebassNative.Heading>
</Banner>

  <RebassNative.Code>{`<Banner
  color='white'
  bg='darken'
  backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
  <Heading
    f={[ 4, 5, 6, 7 ]}>
    Hello
  </Heading>
</Banner>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Flex](/components/Flex) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
m |  | space | responsive
mt |  | space | responsive
mr |  | space | responsive
mb |  | space | responsive
ml |  | space | responsive
mx |  | space | responsive
my |  | space | responsive
p | 3 | space | responsive
pt |  | space | responsive
pr |  | space | responsive
pb |  | space | responsive
pl |  | space | responsive
px |  | space | responsive
py |  | space | responsive
flexDirection | column | N/A | responsive
alignItems | center | N/A | responsive
justifyContent | center | N/A | responsive
minHeight | 100 | minHeights | responsive
color |  | colors | responsive
bg | black | colors | responsive
backgroundSize |  | N/A | responsive
backgroundPosition |  | N/A | responsive
backgroundImage |  | N/A | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    