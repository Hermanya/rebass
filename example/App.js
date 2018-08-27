import React from 'react'
import { ScrollView, View, Dimensions } from 'react-native'
import { Font } from 'expo'
import {
  Container, Heading, Subhead, Box, Flex, Row, Column, Text,
  Arrow, Avatar,
  Button, ButtonTransparent, ButtonOutline, ButtonCircle,
  Badge, Blockquote, Border,
  Caps, Card, Circle, Code, Close,
  Divider, Donut, Dot, Drawer,
  Image,

  Lead, Label, Measure, Message, Modal,

  Pre, Samp, Small,

  Tabs, Tab,

  Provider
} from 'rebass-native'

const theme = {
  colors: {
    blue: '#6785d0',
    violet: '#b75fb3',
    yellow: '#b88f3e',
    red: '#cb5658',
    green: '#64a85c'
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
    this.loadFonts()
      .then(() => this.setState({loading: false}))
  }
  loadFonts () {
    return Font.loadAsync({
      'monospace': require('./assets/fonts/SpaceMono-Regular.ttf')
    })
  }
  render () {
    if (this.state.loading) {
      return <View><Text>Loading!</Text></View>
    }
    return (
      <Provider theme={theme}>
        <ScrollView>
          <Container pt={5}>
            <Heading>Components</Heading>
            {/* <Switch value={this.state.switchOn} onValueChange={() => this.setState({
            switchOn: !this.state.switchOn
          })} m={5} color="blue"/> */}
            <Subhead>Flex</Subhead>
            <Flex flexDirection='row'>
              <Box width={[ 1 / 2 ]} p={3} bg='blue'>
                <Text color='white'>Flex</Text>
              </Box>
              <Box width={[ 1 / 2 ]} p={3} bg='violet'>
                <Text color='white' >Box</Text>
              </Box>
            </Flex>

            <Subhead>Box</Subhead>
            <Box
              px={3}
              py={4}
              bg='blue'>
              <Text color='white'>Box</Text>
            </Box>

            <Subhead>Rows & Columns</Subhead>
            <Row>
              <Column><Text>Column</Text></Column>
              <Column><Text>Column</Text></Column>
              <Column><Text>Column</Text></Column>
            </Row>

            <Subhead>Buttons</Subhead>
            <Row justifyContent='space-around'>
              <Button children='Basic' onPress={this.alert} />
              <ButtonOutline textProps={{color: 'blue'}} children='Outline' onPress={this.alert} />
              <ButtonTransparent textProps={{color: 'blue'}} children='Transparent' onPress={this.alert} />
              <ButtonCircle children='Circle' onPress={this.alert} />
              {/* <Close onPress={this.alert}/> */}
            </Row>

            <Subhead>Arrows</Subhead>
            <Row justifyContent='space-around'>
              <Arrow direction='down' />
              <Arrow direction='up' />
            </Row>

            <Subhead>Avatar</Subhead>
            <Avatar size={64} source={{uri: 'https://media.licdn.com/dms/image/C4D03AQHrQu7jWlkkmQ/profile-displayphoto-shrink_200_200/0?e=1537401600&v=beta&t=ws9VPq6stGc_d_hWJnDedhd-DZWllePa3RQHUacWQJU'
            }} />

            <Flex flexDirection='row' alignItems='center'>
              <Subhead>Badges</Subhead>
              <Badge>Beep</Badge>
              <Circle>B</Circle>
            </Flex>

            <Subhead>Typography</Subhead>
            <Blockquote>
              “Block quote”
            </Blockquote>
            <Caps>Caps</Caps>
            <Code>Code</Code>
            <Pre>Pre</Pre>
            <Samp>Samp</Samp>
            <Lead>Lead</Lead>
            <Label>Label</Label>
            <Measure maxWidth={256}>
              Sunglasses in kensington taste of little italy should we TTC 905ers central tech sneaky dee's nachos zanta shopify blogTO garrison creek melting smell ride the rocket yonge and eg yonge and dundas square comfort zone roncy the 504 the 504 the annex ISO oliver's jewellery attention all passengers on line 1 first thursdays gerrard aquare kensington market 3 AM at the lakeview toronto public library sneaky dee's nachos hooker harveys jane and finch bellwoods can collectors taste of little italy the dufferin mall pedestrian sundays PATH timmie's 416 sugar and carlos riverdale park MMVAs crews beef patties don valley parking lot
            </Measure>
            <Small>Small</Small>

            <Subhead>Border</Subhead>
            <Border
              py={2}>
              <Text>Hello</Text>
            </Border>

            <Subhead>Card</Subhead>
            <Card width={256}>
              <Image
                style={{width: '100%'}}
                aspectRatio={1}
                source={{uri: 'https://source.unsplash.com/random'}}
              />
              <Subhead p={2}>
                Hello
              </Subhead>
            </Card>

            <Subhead>Divider</Subhead>
            <Divider />

            <Subhead>Donut</Subhead>
            <Donut
              value={2 / 3}
              strokeWidth={3}
              size={256}
              strokeColor='blue'
            />

            <Subhead>Dot</Subhead>
            <Flex flexDirection='row'>
              <Dot bg='black' />
              <Dot />
              <Dot />
            </Flex>

            <Subhead>Drawer</Subhead>
            <Button onPress={() => this.setState({drawerOpen: true})}>Open Drawer</Button>

            <Subhead>Group</Subhead>
            <Flex flexDirection='row'>
              <Button children='Beep' borderTopRightRadius={0} borderBottomRightRadius={0} />
              <ButtonOutline textProps={{color: 'blue'}} children='Boop' borderRadius={0} borderLeftWidth={0} borderRightWidth={0} />
              <ButtonOutline textProps={{color: 'blue'}} children='Bop' borderTopLeftRadius={0} borderBottomLeftRadius={0} />
            </Flex>

            <Subhead>Image</Subhead>
            <Image
              style={{width: Dimensions.get('window').width}}
              mx={-3}
              aspectRatio={2}
              source={{uri: 'https://source.unsplash.com/random'}} />

            <Subhead>Message</Subhead>
            <Message>Hello there</Message>

            <Subhead>Modal</Subhead>
            <Button onPress={() => this.setState({modalOpen: true})}>Open Modal</Button>

            <Subhead>Tabs</Subhead>
            <Tabs>
              <Tab borderColor='blue'>
                <Text>Beep</Text>
              </Tab>
              <Tab>
                <Text>Boop</Text>
              </Tab>
              <Tab>
                <Text>Bop</Text>
              </Tab>
            </Tabs>

          </Container>
        </ScrollView>
        <Drawer
          open={this.state.drawerOpen}
          side='left'
          p={3}
          bg='white'>
          <Heading>Hello from drawer!</Heading>
          <Button onPress={() => this.setState({drawerOpen: false})}>Close Drawer</Button>
        </Drawer>

        {this.state.modalOpen && <Modal width={256}>
          <Heading>Hello from modal!</Heading>
          <Button onPress={() => this.setState({modalOpen: false})}>Close Modal</Button>
        </Modal>}
      </Provider>
    )
  }
}
