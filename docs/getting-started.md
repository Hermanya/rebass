
# Getting Started

```sh
npm i rebass-native
```

## Provider

To ensure Rebass Natives's theme is properly configured, use the `<Provider />` component at the root of your application.
The `Provider` component accepts a `theme` props for setting a [custom theme][theming].

```.jsx
<Provider>
  <Heading>Hello</Heading>
</Provider>
```

Import UI components directly from Rebass Native and use them to build larger components.

```js
import {
  Card,
  Box,
  Image,
  Subhead,
  Small
} from 'rebass-native'
```

```.jsx
<Box width={256}>
  <Card>
    <Image source={{uri: photo}} style={{ height: '100px', width: '100%' }}/>
    <Box p={2}>
      <Subhead>Card</Subhead>
      <Small>Small meta text</Small>
    </Box>
  </Card>
</Box>
```

Alternatively, use Rebass Native components as the starting point for custom UI components.

```jsx
import styled from 'styled-components'
import { Button as BaseButton } from 'rebass-native'

const Button = styled(BaseButton)`
    opacity: ${props => props.disabled ? props.theme.colors.semiTransparent : 1};
`

export default Button
```

[theming]: theming.md
[grid-styled]: https://github.com/jxnblk/grid-styled