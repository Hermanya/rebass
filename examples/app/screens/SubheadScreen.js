
import React from 'react';
import RebassNative from 'rebass-native'

export const SubheadScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Subhead</RebassNative.Heading>
  <RebassNative.Subhead
  children='Hello'
/>

  <RebassNative.Code>{`<Subhead
  children='Hello'
/>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Heading](/components/Heading) > [Text](/components/Text) > [Text](/components/Text)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
fontSize | 4 | fontSizes | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    