
import React from 'react';
import RebassNative from 'rebass-native'

export const ButtonTransparentScreen = () => <RebassNative.Box>
  <RebassNative.Heading>ButtonTransparent</RebassNative.Heading>
  <RebassNative.ButtonTransparent>
  Hello
</RebassNative.ButtonTransparent>

  <RebassNative.Code>{`<ButtonTransparent>
  Hello
</ButtonTransparent>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Button](/components/Button) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
color |  | colors | responsive
bg | transparent | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    