import React from 'react';
import {
  Alert,
  ScrollView,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import {
  Container, Heading, Subhead, Box, Flex,  Row, Column, Text,
  Arrow, Avatar,
  Button, ButtonTransparent, ButtonOutline, ButtonCircle,
  Badge, Blockquote, Border,
    Caps, Card, Checkbox, Circle, Code, Close,
    Divider, Donut, Dot, Drawer,
    Image,

    Switch
  } from 'rebass-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {}

  render() {
    return (
      <View>
        <ScrollView>
          <Container>
          <Heading>Components</Heading>
          <Switch value={this.state.switchOn} onValueChange={() => this.setState({
            switchOn: !this.state.switchOn
          })} m={5} color="blue"/>
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


          <Subhead>Checkbox</Subhead>
          <Checkbox value={this.state.checkboxValue} onChange={() => this.setState({
            checkboxValue: !this.state.checkboxValue
          })}/>

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
      </View>
    );
  }

  alert=() => {
    Alert.alert(
      'It works',
      '',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

