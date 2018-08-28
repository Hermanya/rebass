
import React from 'react';
import RebassNative from 'rebass-native'

export const ButtonOutlineScreen = () => <RebassNative.Box>
  <RebassNative.Heading>ButtonOutline</RebassNative.Heading>
  <RebassNative.ButtonOutline
  children='Hello'
/>

  <RebassNative.Code>{`<ButtonOutline
  children='Hello'
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Button](/components/Button) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
color |  | colors | responsive
bg | transparent | colors | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    