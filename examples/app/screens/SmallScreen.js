
import React from 'react';
import RebassNative from 'rebass-native'

export const SmallScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Small</RebassNative.Heading>
  <RebassNative.Small
  children='Hello'
/>

  <RebassNative.Code>{`<Small
  children='Hello'
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Text](/components/Text) > [Text](/components/Text)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
fontSize |  | fontSizes | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    