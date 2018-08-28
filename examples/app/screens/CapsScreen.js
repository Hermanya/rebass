
import React from 'react';
import RebassNative from 'rebass-native'

export const CapsScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Caps</RebassNative.Heading>
  <RebassNative.Caps children="Example"/>
  <RebassNative.Code>{`<Caps children="Example"/>`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Text](/components/Text)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
fontSize |  | fontSizes | responsive
letterSpacing | 4 | letterSpacings | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    