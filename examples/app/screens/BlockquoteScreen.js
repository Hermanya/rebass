
import React from 'react';
import RebassNative from 'rebass-native'

export const BlockquoteScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Blockquote</RebassNative.Heading>
  <RebassNative.Blockquote>
  “The simplest scale is a single note, and sticking with a single note draws more attention to other parameters, such as rhythm and inflection.”
</RebassNative.Blockquote>

  <RebassNative.Code>{`<Blockquote>
  “The simplest scale is a single note, and sticking with a single note draws more attention to other parameters, such as rhythm and inflection.”
</Blockquote>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](/components/Box) > [Box](/components/Box)`}</RebassNative.Text>
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
pl | 2 | space | responsive
px |  | space | responsive
py |  | space | responsive
borderColor | blue | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    