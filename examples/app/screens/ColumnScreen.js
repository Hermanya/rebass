
import React from 'react';
import RebassNative from 'rebass-native'

export const ColumnScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Column</RebassNative.Heading>
  <RebassNative.Row>
  <Column>Column</RebassNative.Column>
  <Column>Column</Column>
  <Column>Column</Column>
</Row>

  <RebassNative.Code>{`<Row>
  <Column>Column</Column>
  <Column>Column</Column>
  <Column>Column</Column>
</Row>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
m |  | space | responsive
mt |  | space | responsive
mr |  | space | responsive
mb | 4 | space | responsive
ml |  | space | responsive
mx |  | space | responsive
my |  | space | responsive
p |  | space | responsive
pt |  | space | responsive
pr |  | space | responsive
pb |  | space | responsive
pl |  | space | responsive
px | 3 | space | responsive
py |  | space | responsive
flex | 1 1 auto | N/A | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    