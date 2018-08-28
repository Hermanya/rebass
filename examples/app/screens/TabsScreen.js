
import React from 'react';
import RebassNative from 'rebass-native'

export const TabsScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Tabs</RebassNative.Heading>
  <RebassNative.Tabs>
  <Tab borderColor='blue'>
    Beep
  </RebassNative.Tab>
  <Tab>
    Boop
  </Tab>
  <Tab>
    Bop
  </Tab>
</Tabs>

  <RebassNative.Code>{`<Tabs>
  <Tab borderColor='blue'>
    Beep
  </Tab>
  <Tab>
    Boop
  </Tab>
  <Tab>
    Bop
  </Tab>
</Tabs>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Flex](/components/Flex) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
flexDirection | row | N/A | responsive
borderColor | gray | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    