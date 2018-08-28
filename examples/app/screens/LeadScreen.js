
import React from 'react';
import RebassNative from 'rebass-native'

export const LeadScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Lead</RebassNative.Heading>
  <RebassNative.Lead>
  Hello Lead
</RebassNative.Lead>

  <RebassNative.Code>{`<Lead>
  Hello Lead
</Lead>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Text](/components/Text) > [Text](/components/Text)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
fontSize | 3 | fontSizes | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    