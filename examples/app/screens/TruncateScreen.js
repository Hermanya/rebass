
import React from 'react';
import RebassNative from 'rebass-native'

export const TruncateScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Truncate</RebassNative.Heading>
  <RebassNative.Truncate>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</RebassNative.Truncate>

  <RebassNative.Code>{`<Truncate>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Truncate>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Text](/components/Text) > [Text](/components/Text)`}</RebassNative.Text>
  <RebassNative.Pre>{``}</RebassNative.Pre>
</RebassNative.Box>
    