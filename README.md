# Rebass-native

Port of Rebass for react-native, a UI component library & design system,
built with [styled-system][system],
with support for
[styled-components][sc].

[![Build Status][badge]][travis]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]

[badge]: https://img.shields.io/travis/hermanya/rebass-native.svg?style=flat-square
[travis]: https://travis-ci.org/hermanya/rebass-native
[coverage-badge]: https://img.shields.io/codecov/c/github/hermanya/rebass-native.svg?style=flat-square
[coverage]: https://codecov.io/github/hermanya/rebass-native

[downloads-badge]: https://img.shields.io/npm/dw/rebass-native.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/rebass-native.svg?style=flat-square
[npm]: https://npmjs.com/package/rebass-native


```sh
npm i rebass-native@next
```

Rebass-native is a port of Rebass, a library of highly-composable, primitive UI components for React,
built with styled-components to keep styles isolated and reduce the need to write custom Styles in your application.
Based upon a configurable design system,
Rebass‘s props API makes building consistent, responsive web apps simpler and faster.


## Getting Started

```jsx
import React from 'react'
import { Provider, Heading, Button } from 'rebass-native'

const App = props => (
  <Provider>
    <Heading>Hello</Heading>
    <Button>Rebass</Button>
  </Provider>
)
```

## Features

- Kickstart your own react-native component library
- Responsive style props from [styled-system][system]
- Flexbox grid with [native-grid-styled][gs]
- Support for [styled-components][sc]
- Functional stateless UI components
- Configurable theming
- Extensible base components
- Design-system based consistency
- Built for responsive web design

## Documentation

- [Docs](https://hermanya.github.io/rebass-native)
- [Getting Started](https://hermanya.github.io/rebass-native/getting-started)
- [Props](https://hermanya.github.io/rebass-native/props)
- [Grid System](https://hermanya.github.io/rebass-native/grid-system)
- [Theming](https://hermanya.github.io/rebass-native/theming)
- [Extending](https://hermanya.github.io/rebass-native/extending)
- [Components](https://hermanya.github.io/rebass-native/components)

## CodeSandbox

Try it out:

https://codesandbox.io/s/github/hermanya/rebass-native/tree/master/examples/sandbox

### Architectural Approach

Rebass is built around a component architectural approach inspired by Dan Abramov’s
[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963),
where presentational components are the only ones that encapsulate styles and contain no application logic,
and container components do not contain any styles or DOM markup and handle all the application logic.

Rebass only contains presentational components,
which means controlling things like progressive disclosure mechanisms
or dropdown menus should be handled at a higher level in container components.
Therefore, Rebass itself does not require any client-side JavaScript,
is well suited to server-side rendering,
and can fit into virtually any higher level application architecture.

See [Patterns for Style Composition in React](http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/)
for more on some of the thought behind Rebass.


### Related

- [styled-system][system]
- [native-grid-styled][gs]
- [styled-components][sc]

[system]: https://github.com/jxnblk/styled-system
[gs]: https://github.com/hermanya/native-grid-styled
[sc]: https://github.com/styled-components/styled-components

---

[Contributing](.github/CONTRIBUTING.md)
|
[MIT License](.github/LICENSE.md)
