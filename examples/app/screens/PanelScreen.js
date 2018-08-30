
import React from 'react';
import RebassNative from 'rebass-native'

export const PanelScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Panel</RebassNative.Heading>
  <RebassNative.Panel color='blue'>
  <Panel.Header
    color='white'
    bg='blue'>
    Hello
  </RebassNative.Panel.Header>
  <Box p={3}>
    <Subhead>
      Panel
    </Subhead>
  </Box>
  <Panel.Footer color='blue'>
    Footer
  </Panel.Footer>
</Panel>

  <RebassNative.Code>{`<Panel color='blue'>
  <Panel.Header
    color='white'
    bg='blue'>
    Hello
  </Panel.Header>
  <Box p={3}>
    <Subhead>
      Panel
    </Subhead>
  </Box>
  <Panel.Footer color='blue'>
    Footer
  </Panel.Footer>
</Panel>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](/components/Box) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
color |  | colors | responsive
bg | white | colors | responsive
borderRadius | 2 | radii | responsive
border | 1 | borders | responsive
borderTop |  | borders | responsive
borderRight |  | borders | responsive
borderBottom |  | borders | responsive
borderLeft |  | borders | responsive
borderColor | gray | colors | responsive
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
py |  | space | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    