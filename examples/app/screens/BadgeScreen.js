
import React from 'react';
import RebassNative from 'rebass-native'

export const BadgeScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Badge</RebassNative.Heading>
  <RebassNative.Heading>
  Hello
  <Badge>
    Beep
  </RebassNative.Badge>
</Heading>

  <RebassNative.Code>{`<Heading>
  Hello
  <Badge>
    Beep
  </Badge>
</Heading>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](/components/Box) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
m |  | space | responsive
mt |  | space | responsive
mr |  | space | responsive
mb |  | space | responsive
ml |  | space | responsive
mx | 1 | space | responsive
my |  | space | responsive
p |  | space | responsive
pt |  | space | responsive
pr |  | space | responsive
pb |  | space | responsive
pl |  | space | responsive
px | 2 | space | responsive
py | 1 | space | responsive
color |  | colors | responsive
bg | blue | colors | responsive
borderRadius | 2 | radii | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    