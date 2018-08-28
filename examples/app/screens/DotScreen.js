
import React from 'react';
import RebassNative from 'rebass-native'

export const DotScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Dot</RebassNative.Heading>
  <RebassNative.Flex>
  <Dot bg='black' />
  <Dot />
  <Dot />
</RebassNative.Flex>

  <RebassNative.Code>{`<Flex>
  <Dot bg='black' />
  <Dot />
  <Dot />
</Flex>
`}</RebassNative.Code>
  <RebassNative.Text>{``}</RebassNative.Text>
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
size | 16 | N/A | responsive
color |  | colors | responsive
bg | grey | colors | responsive
borderRadius | 99999 | radii | responsive
border | 4 | borders | responsive
borderTop |  | borders | responsive
borderRight |  | borders | responsive
borderBottom |  | borders | responsive
borderLeft |  | borders | responsive
borderColor | transparent | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    