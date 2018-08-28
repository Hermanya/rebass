
import React from 'react';
import RebassNative from 'rebass-native'

export const CircleScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Circle</RebassNative.Heading>
  <RebassNative.Circle>
  A
</RebassNative.Circle>

  <RebassNative.Code>{`<Circle>
  A
</Circle>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Badge](/components/Badge) > [Box](/components/Box) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
size | 24 | N/A | responsive
borderRadius | 99999px | radii | responsive
textAlign |  | N/A | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    