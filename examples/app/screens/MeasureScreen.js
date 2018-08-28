
import React from 'react';
import RebassNative from 'rebass-native'

export const MeasureScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Measure</RebassNative.Heading>
  <RebassNative.Measure>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</RebassNative.Measure>

  <RebassNative.Code>{`<Measure>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Measure>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [MeasureHelper](/components/MeasureHelper)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
maxWidth | 256 | maxWidths | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    