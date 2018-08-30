
# Components
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href='#flex'>Flex</a></li>
<li><a href='#box'>Box</a></li>
<li><a href='#provider'>Provider</a></li>
<li><a href='#button'>Button</a></li>
<li><a href='#buttonoutline'>ButtonOutline</a></li>
<li><a href='#buttoncircle'>ButtonCircle</a></li>
<li><a href='#buttontransparent'>ButtonTransparent</a></li>
<li><a href='#close'>Close</a></li>
<li><a href='#text'>Text</a></li>
<li><a href='#heading'>Heading</a></li>
<li><a href='#subhead'>Subhead</a></li>
<li><a href='#caps'>Caps</a></li>
<li><a href='#small'>Small</a></li>
<li><a href='#lead'>Lead</a></li>
<li><a href='#truncate'>Truncate</a></li>
<li><a href='#blockquote'>Blockquote</a></li>
<li><a href='#pre'>Pre</a></li>
<li><a href='#code'>Code</a></li>
<li><a href='#measure'>Measure</a></li>
<li><a href='#label'>Label</a></li>
<li><a href='#divider'>Divider</a></li>
<li><a href='#border'>Border</a></li>
<li><a href='#image'>Image</a></li>
<li><a href='#avatar'>Avatar</a></li>
<li><a href='#container'>Container</a></li>
<li><a href='#row'>Row</a></li>
<li><a href='#column'>Column</a></li>
<li><a href='#card'>Card</a></li>
<li><a href='#panel'>Panel</a></li>
<li><a href='#progress'>Progress</a></li>
<li><a href='#banner'>Banner</a></li>
<li><a href='#message'>Message</a></li>
<li><a href='#tabs'>Tabs</a></li>
<li><a href='#tab'>Tab</a></li>
<li><a href='#badge'>Badge</a></li>
<li><a href='#circle'>Circle</a></li>
<li><a href='#dot'>Dot</a></li>
<li><a href='#arrow'>Arrow</a></li>
<li><a href='#position'>Position</a></li>
<li><a href='#absolute'>Absolute</a></li>
<li><a href='#relative'>Relative</a></li>
<li><a href='#modal'>Modal</a></li>
<li><a href='#drawer'>Drawer</a></li>
<li><a href='#hide'>Hide</a></li>
  </ul>
</details>
## Flex
Extends [Box](#box)

```.jsx
<Flex
  mx={-3}
  flexWrap='wrap'>
  <Box width={[ 1, 1/2 ]} p={3} color='white' bg='blue'>
    Flex
  </Box>
  <Box width={[ 1, 1/2 ]} p={3} color='white' bg='violet'>
    Box
  </Box>
</Flex>

```

### Props

- `flexWrap`
- `flexDirection`
- `alignItems`
- `justifyContent`

## Box
Extends [Box](#box)

```.jsx
<Box
  px={3}
  py={4}
  textProps={{color: 'white'}}
  bg='blue'>
  Hello
</Box>

```

## Provider

```.jsx
undefined
```

## Button
Extends [Box](#box)

```.jsx
<Button
  children='Hello'
/>

```

### Props

- `borderRadius`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `justifyContent`

## ButtonOutline
Extends [Button](#button)

```.jsx
<ButtonOutline
  children='Hello'
/>

```

## ButtonCircle
Extends [Button](#button)

```.jsx
<ButtonCircle
  children='Hello'
/>

```

### Props

- `borderRadius`

## ButtonTransparent
Extends [Button](#button)

```.jsx
<ButtonTransparent textProps={{color: 'blue'}}>
  Hello
</ButtonTransparent>

```

## Close
Extends [ButtonTransparent](#buttontransparent)

```.jsx
<Close />

```

## Text
Extends [Text](#text)

```.jsx
<Text
  textAlign='center'
  fontWeight='bold'
  children='Hello'
/>

```

### Props

- `fontFamily`
- `fontSize`
- `fontWeight`
- `textAlign`

## Heading
Extends [Text](#text)

```.jsx
<Heading
  children='Hello'
/>

```

### Props

- `fontSize`
- `fontWeight`
- `fontFamily`
- `textAlign`

## Subhead
Extends [Heading](#heading)

```.jsx
<Subhead
  children='Hello'
/>

```

### Props

- `fontSize`

## Caps
Extends [Text](#text)

```.jsx
undefined
```

### Props

- `fontSize`
- `letterSpacing`

## Small
Extends [Text](#text)

```.jsx
<Small
  children='Hello'
/>

```

### Props

- `fontSize`

## Lead
Extends [Text](#text)

```.jsx
<Lead>
  Hello Lead
</Lead>

```

### Props

- `fontSize`

## Truncate
Extends [Text](#text)

```.jsx
<Truncate>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Truncate>

```

## Blockquote
Extends [Box](#box)

```.jsx
<Blockquote>
  “The simplest scale is a single note, and sticking with a single note draws more attention to other parameters, such as rhythm and inflection.”
</Blockquote>

```

### Props

- `borderColor`

## Pre

```.jsx
<Pre
  children="const hello = 'Rebass'"
/>

```

### Props

- `fontSize`
- `fontFamily`

## Code
Extends [Text](#text)

```.jsx
<Code
  children='<Hello />'
/>

```

### Props

- `fontSize`
- `fontFamily`

## Measure

```.jsx
<Measure>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Measure>

```

### Props

- `maxWidth`

## Label
Extends [Text](#text)

```.jsx
<Label>
  Hello Label
</Label>

```

### Props

- `fontSize`
- `alignItems`

## Divider
Extends [Box](#box)

```.jsx
<Divider
  w={1}
  borderColor='blue'
/>

```

### Props

- `borderColor`

## Border
Extends [Box](#box)

```.jsx
<Border
  py={2}>
  Hello
</Border>

```

### Props

- `borderColor`
- `width`

## Image
Extends [Image](#image)

```.jsx
<Image
  style={{
    height: '100px',
    width: '100px'
  }}
  source={{uri: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=200'}}
/>

```

### Props

- `width`

## Avatar
Extends [Image](#image)

```.jsx
<Avatar
  size={32}
  source={{uri: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'}}
/>

```

### Props

- `size`
- `borderRadius`

## Container
Extends [Box](#box)

```.jsx
<Container>
  Hello
</Container>

```

### Props

- `maxWidth`

## Row
Extends [Flex](#flex)

```.jsx
<Row>
  <Column>Column</Column>
  <Column>Column</Column>
</Row>

```

### Props

- `flexDirection`

## Column
Extends [Box](#box)

```.jsx
<Row>
  <Column>Column</Column>
  <Column>Column</Column>
  <Column>Column</Column>
</Row>

```

### Props

- `flex`

## Card

```.jsx
<Card width={256}>
  <Image
    style={{width: '100%', height: '100px'}}
    source={{uri: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=200'}}
  />
  <Subhead p={2}>
    Hello
  </Subhead>
</Card>

```

### Props

- `borderRadius`
- `boxShadow`

## Panel
Extends [Box](#box)

```.jsx
<Panel color='blue'>
  <Panel.Header
    textProps={{color: 'white'}}
    bg='blue'>
    Hello
  </Panel.Header>
  <Box p={3}>
    <Subhead>
      Panel
    </Subhead>
  </Box>
  <Panel.Footer
    textProps={{color: 'blue'}}
  >
    Footer
  </Panel.Footer>
</Panel>

```

### Props

- `borderRadius`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`

## Progress

```.jsx
<Progress
  value={1/3}
/>

```

### Props

- `width`
- `borderRadius`

## Banner
Extends [Flex](#flex)

```.jsx
<Banner
  color='white'
  bg='black'>
  <Heading
    f={4}>
    Hello
  </Heading>
</Banner>

```

### Props

- `flexDirection`
- `alignItems`
- `justifyContent`
- `minHeight`
- `backgroundSize`
- `backgroundPosition`
- `backgroundImage`

## Message

```.jsx
<Message>
  Hello
</Message>

```

### Props

- `flexDirection`
- `alignItems`
- `minHeight`

## Tabs
Extends [Flex](#flex)

```.jsx
<Tabs>
  <Tab borderColor='blue'>
    Beep
  </Tab>
  <Tab>
    Boop
  </Tab>
  <Tab>
    Bop
  </Tab>
</Tabs>

```

### Props

- `flexDirection`
- `borderColor`

## Tab

```.jsx
<Tab borderColor='blue'>
  Hello
</Tab>

```

### Props

- `borderColor`

## Badge
Extends [Box](#box)

```.jsx
<Heading>
  Hello
  <Badge>
    Beep
  </Badge>
</Heading>

```

### Props

- `borderRadius`

## Circle
Extends [Badge](#badge)

```.jsx
<Circle>
  A
</Circle>

```

### Props

- `size`
- `borderRadius`
- `textAlign`

## Dot

```.jsx
<Flex>
  <Dot bg='black' />
  <Dot />
  <Dot />
</Flex>

```

### Props

- `size`
- `borderRadius`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`

## Arrow

```.jsx
<Arrow direction='down' />

```

## Position
Extends [Box](#box)

```.jsx
<Position
  p={3}
  bg='green'
  position='relative'>
  Hello
</Position>

```

### Props

- `zIndex`
- `top`
- `right`
- `bottom`
- `left`

## Absolute
Extends [Position](#position)

```.jsx
<Relative minHeight={100}>
  <Absolute bottom={0} right={0}>
    Hello
  </Absolute>
</Relative>

```

## Relative
Extends [Position](#position)

```.jsx
undefined
```

## Modal
Extends [Absolute](#absolute)

```.jsx
{ false && (
  <Absolute
    top={0}
    right={0}
    bottom={0}
    left={0}
  >
    <Modal width={256}>
      <Heading>Hello</Heading>
    </Modal>
  </Absolute>
) }

```

### Props

- `top`
- `left`
- `borderRadius`
- `width`
- `maxWidth`
- `maxHeight`

## Drawer
Extends [Box](#box)

```.jsx
<div>
  <Drawer
    open={false}
    side='right'
    p={3}
    color='white'
    bg='black'>
    <Heading>Hello</Heading>
  </Drawer>
</div>

```

### Props

- `position`
- `width`
- `zIndex`
- `height`

## Hide

```.jsx
<Hide p={2} bg='blue' xsmall>Hide xsmall</Hide>
<Hide p={2} bg='green' small>Hide small</Hide>
<Hide p={2} bg='yellow' medium>Hide medium</Hide>
<Hide p={2} bg='orange' large>Hide large</Hide>
<Hide p={2} bg='red' xlarge>Hide xlarge</Hide>

```

