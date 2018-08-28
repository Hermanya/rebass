
import React from 'react';
import RebassNative from 'rebass-native'

export const ModalScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Modal</RebassNative.Heading>
  <RebassNative.div>
  {false && (
    <div>
      <Fixed
        top={0}
        right={0}
        bottom={0}
        left={0}
      />
      <Modal width={256}>
        <Heading>Hello</RebassNative.Heading>
      </Modal>
    </div>
  )}
</div>

  <RebassNative.Code>{`<div>
  {false && (
    <div>
      <Fixed
        top={0}
        right={0}
        bottom={0}
        left={0}
      />
      <Modal width={256}>
        <Heading>Hello</Heading>
      </Modal>
    </div>
  )}
</div>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Absolute](/components/Absolute) > [Position](/components/Position) > [Box](/components/Box) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
top | 50% | N/A | responsive
left | 50% | N/A | responsive
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
color |  | colors | responsive
bg | white | colors | responsive
borderRadius | 2 | radii | responsive
width |  | N/A | responsive
maxWidth |  | maxWidths | responsive
maxHeight |  | maxHeights | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    