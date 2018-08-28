
import React from 'react';
import RebassNative from 'rebass-native'

export const RowScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Row</RebassNative.Heading>
  <RebassNative.Row>
  <Column>Column</RebassNative.Column>
  <Column>Column</Column>
</Row>

  <RebassNative.Code>{`<Row>
  <Column>Column</Column>
  <Column>Column</Column>
</Row>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Flex](/components/Flex) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
flexDirection | row | N/A | responsive
m |  | space | responsive
mt |  | space | responsive
mr |  | space | responsive
mb |  | space | responsive
ml |  | space | responsive
mx | -3 | space | responsive
my |  | space | responsive
p |  | space | responsive
pt |  | space | responsive
pr |  | space | responsive
pb |  | space | responsive
pl |  | space | responsive
px |  | space | responsive
py |  | space | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    