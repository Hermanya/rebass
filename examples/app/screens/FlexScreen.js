
import React from 'react';
import RebassNative from 'rebass-native'

export const FlexScreen = () => <RebassNative.Box>
  <RebassNative.Heading>Flex</RebassNative.Heading>
  <RebassNative.Flex
  mx={-3}
  flexWrap='wrap'>
  <Box width={[ 1, 1/2 ]} p={3} color='white' bg='blue'>
    Flex
  </RebassNative.Box>
  <Box width={[ 1, 1/2 ]} p={3} color='white' bg='violet'>
    Box
  </Box>
</Flex>

  <RebassNative.Code>{`<Flex
  mx={-3}
  flexWrap='wrap'>
  <Box width={[ 1, 1/2 ]} p={3} color='white' bg='blue'>
    Flex
  </Box>
  <Box width={[ 1, 1/2 ]} p={3} color='white' bg='violet'>
    Box
  </Box>
</Flex>
`}</RebassNative.Code>
  <RebassNative.Text>{`Extends: [Box](/components/Box)`}</RebassNative.Text>
  <RebassNative.Pre>{`prop | default | theme key | style type
---|---|---|---
flexWrap |  | N/A | responsive
flexDirection |  | N/A | responsive
alignItems |  | N/A | responsive
justifyContent |  | N/A | responsive`}</RebassNative.Pre>
</RebassNative.Box>
    