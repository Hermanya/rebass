
import React from 'react';
import RebassNative from 'rebass-native'

export const AbsoluteScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Absolute</RebassNative.Heading>
  <RebassNative.Relative minHeight={100}>
  <Absolute bottom={0} right={0}>
    Hello
  </RebassNative.Absolute>
</Relative>

  <RebassNative.Code>{`<Relative minHeight={100}>
  <Absolute bottom={0} right={0}>
    Hello
  </Absolute>
</Relative>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Position](/components/Position) > [Box](/components/Box) > [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{``}</RebassNative.Pre>
</RebassNative.Box>
    