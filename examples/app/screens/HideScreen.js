
import React from 'react';
import RebassNative from 'rebass-native'

export const HideScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Hide</RebassNative.Heading>
  <RebassNative.Hide p={2} bg='blue' xsmall>Hide xsmall</RebassNative.Hide>
<Hide p={2} bg='green' small>Hide small</Hide>
<Hide p={2} bg='yellow' medium>Hide medium</Hide>
<Hide p={2} bg='orange' large>Hide large</Hide>
<Hide p={2} bg='red' xlarge>Hide xlarge</Hide>

  <RebassNative.Code>{`<Hide p={2} bg='blue' xsmall>Hide xsmall</Hide>
<Hide p={2} bg='green' small>Hide small</Hide>
<Hide p={2} bg='yellow' medium>Hide medium</Hide>
<Hide p={2} bg='orange' large>Hide large</Hide>
<Hide p={2} bg='red' xlarge>Hide xlarge</Hide>
`}</RebassNative.Code>
  <RebassNative.Text>{``}</RebassNative.Text>
  <RebassNative.Pre>{``}</RebassNative.Pre>
</RebassNative.Box>
    