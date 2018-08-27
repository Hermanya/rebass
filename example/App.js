import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import { Font } from 'expo'
import {
  Container, Heading, Subhead, Box, Flex,  Row, Column, Text,
  Arrow, Avatar,
  Button, ButtonTransparent, ButtonOutline, ButtonCircle,
  Badge, Blockquote, Border,
    Caps, Card, Checkbox, Circle, Code, Close,
    Divider, Donut, Dot, Drawer,
    Image,

    Lead, Label, Measure, Message
  } from 'rebass-native';

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
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    })
  }
  render() {
    if (this.state.loading) {
      return <View><Text>Loading!</Text></View>
    }
    return (
      <Box pt={5}>
        <ScrollView>
          <Container>
          <Heading>Components</Heading>
          {/* <Switch value={this.state.switchOn} onValueChange={() => this.setState({
            switchOn: !this.state.switchOn
          })} m={5} color="blue"/> */}
          <Subhead>Flex</Subhead>
          <Flex flexDirection="row">
            <Box width={[ 1/2 ]} p={3} bg='blue'>
              <Text color='white'>Flex</Text>
            </Box>
            <Box width={[ 1/2 ]} p={3} bg='violet'>
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
          <Row justifyContent="space-around">
            <Button children="Basic" onPress={this.alert}/>
            <ButtonOutline textColor="blue" children="Outline" onPress={this.alert}/>
            <ButtonTransparent textColor="blue" children="Transparent" onPress={this.alert}/>
            <ButtonCircle children="Circle" onPress={this.alert}/>
            {/* <Close onPress={this.alert}/> */}
          </Row>

          <Subhead>Arrows</Subhead>
          <Row justifyContent="space-around">
            <Arrow direction='down'/>
            <Arrow direction='up'/>
          </Row>

          <Subhead>Avatar</Subhead>
          <Avatar size={64} source={{uri:'https://media.licdn.com/dms/image/C4D03AQHrQu7jWlkkmQ/profile-displayphoto-shrink_200_200/0?e=1537401600&v=beta&t=ws9VPq6stGc_d_hWJnDedhd-DZWllePa3RQHUacWQJU'
            }}/>

            <Flex flexDirection="row" alignItems="center">
            <Subhead>Badges</Subhead>
            <Badge>Beep</Badge>
            <Circle>🤖</Circle>
            </Flex>

            <Subhead>Typography</Subhead>
            <Blockquote>
            “Block quote”
            </Blockquote>
            <Caps>Caps</Caps>
            <Code>Code</Code>
            <Lead>Lead</Lead>
            <Label>Label</Label>
            <Measure>Measure Measure Measure Measure Measure Measure</Measure>

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
                source={{uri:'https://source.unsplash.com/random'}}
              />
              <Subhead p={2}>
                Hello
              </Subhead>
           </Card>

          <Subhead>Divider</Subhead>
          <Divider/>

          <Subhead>Donut</Subhead>
          <Donut
            value={2/3}
            strokeWidth={3}
            size={256}
            strokeColor='blue'
          />

          <Subhead>Dot</Subhead>
          <Flex flexDirection="row">
            <Dot bg='black' />
            <Dot />
            <Dot />
          </Flex>

          <Subhead>Drawer</Subhead>
          <Button onPress={() => this.setState({drawerOpen: true})}>Open Drawer</Button>

          <Subhead>Group</Subhead>
          <Flex flexDirection="row">
            <Button children='Beep' borderTopRightRadius={0} borderBottomRightRadius={0}/>
            <ButtonOutline textColor="blue"  children='Boop' borderRadius={0} borderLeftWidth={0} borderRightWidth={0}/>
            <ButtonOutline textColor="blue" children='Bop'  borderTopLeftRadius={0} borderBottomLeftRadius={0}/>
          </Flex>

          <Subhead>Image</Subhead>
          <Image
            style={{width: Dimensions.get('window').width}}
            mx={-3}
            aspectRatio={2}
            source={{uri: 'https://source.unsplash.com/random'}}/>

          <Subhead>Message</Subhead>
            <Message>Hello there</Message>

            </Container>
        </ScrollView>
        <Drawer
            open={this.state.drawerOpen}
            side='left'
            p={3}
            bg='white'>
            <Heading>Hello</Heading>
            <Button onPress={() => this.setState({drawerOpen: false})}>Close Drawer</Button>
          </Drawer>
      </Box>
    );
  }
}
