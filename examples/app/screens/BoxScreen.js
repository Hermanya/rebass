
import React from 'react';
import RebassNative from 'rebass-native'

export const BoxScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Box</RebassNative.Heading>
  <RebassNative.Box
  px={3}
  py={4}
  color='white'
  bg='blue'>
  Hello
</RebassNative.Box>


  <RebassNative.Code>{`<Box
  px={3}
  py={4}
  color='white'
  bg='blue'>
  Hello
</Box>

`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](http://jxnblk.com/rebass/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{``}</RebassNative.Pre>
</RebassNative.Box>
    