
# Theming

Rebass Natives's core theme includes breakpoints, a spacing scale,
a typographic scale, fonts, font weights, border radii, and colors, all of which can be configured with the `<Provider />` component.

To customize the underlying theme, pass a `theme` object to the `<Provider />` component.

```.jsx
<Provider
  theme={{
    colors: {
      blue: '#6785d0',
      violet: '#b75fb3`',
      yellow: '#b88f3e',
      red: '#cb5658',
      green: '#64a85c'`
    },
    fontSizes: [
      12, 16, 24, 36, 48, 72
    ]
  }}>
  <Heading color='green' fontSize={[ 2, 3, 4, 5 ]}>
    Hello
  </Heading>
</Provider>
```

The theme object has the following shape. Any custom values passed to the Provider component will be merged with the defaults.

```js
// Default values
const theme = {
  breakpoints: [
    32,
    48,
    64,
    80
  ],
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
  ],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    72,
    96
  ],
  fontWeights: {
    normal: 400,
    bold: 700
  },
  colors: {
    black: '#000',
    white: '#fff',
    ...etc
  },
  radii: [ 0, 2, 4 ]
}
```
