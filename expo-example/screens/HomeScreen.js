import React from 'react';
import {
  Alert,
  ScrollView,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import {Heading, Subhead, Box, Flex, Text, Button, ButtonTransparent, ButtonOutline, ButtonCircle, Close} from 'rebass-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <ScrollView>
          <Heading>Components</Heading>

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

          <Subhead>Button</Subhead>
          <Flex flexDirection="row" justifyContent="space-between">
            <Button children="Basic" onPress={this.alert}/>
            <ButtonOutline color="blue" children="Outline" onPress={this.alert}/>
            <ButtonTransparent color="blue" children="Transparent" onPress={this.alert}/>
            <ButtonCircle children="Circle" onPress={this.alert}/>
            <Close onPress={this.alert}/>

          </Flex>


        </ScrollView>
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

