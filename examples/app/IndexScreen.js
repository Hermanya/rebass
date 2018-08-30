

import React, { Component } from 'react'
import {
  Flex,
  ButtonTransparent
} from 'rebass-native'
import {ScrollView} from 'react-native'

export class IndexScreen extends Component {
  static navigationOptions = {
    title: 'Rebass Native',
  };
  render () {
    return (<ScrollView>
      
      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('FlexScreen')}
      >Flex</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('BoxScreen')}
      >Box</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ProviderScreen')}
      >Provider</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ButtonScreen')}
      >Button</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ButtonOutlineScreen')}
      >ButtonOutline</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ButtonCircleScreen')}
      >ButtonCircle</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ButtonTransparentScreen')}
      >ButtonTransparent</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('CloseScreen')}
      >Close</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('TextScreen')}
      >Text</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('HeadingScreen')}
      >Heading</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('SubheadScreen')}
      >Subhead</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('CapsScreen')}
      >Caps</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('SmallScreen')}
      >Small</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('LeadScreen')}
      >Lead</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('TruncateScreen')}
      >Truncate</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('BlockquoteScreen')}
      >Blockquote</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('PreScreen')}
      >Pre</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('CodeScreen')}
      >Code</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('MeasureScreen')}
      >Measure</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('LabelScreen')}
      >Label</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('DividerScreen')}
      >Divider</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('BorderScreen')}
      >Border</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ImageScreen')}
      >Image</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('AvatarScreen')}
      >Avatar</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ContainerScreen')}
      >Container</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('RowScreen')}
      >Row</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ColumnScreen')}
      >Column</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('CardScreen')}
      >Card</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('PanelScreen')}
      >Panel</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ProgressScreen')}
      >Progress</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('BannerScreen')}
      >Banner</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('MessageScreen')}
      >Message</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('TabsScreen')}
      >Tabs</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('TabScreen')}
      >Tab</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('BadgeScreen')}
      >Badge</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('CircleScreen')}
      >Circle</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('DotScreen')}
      >Dot</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ArrowScreen')}
      >Arrow</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('PositionScreen')}
      >Position</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('AbsoluteScreen')}
      >Absolute</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('RelativeScreen')}
      >Relative</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('ModalScreen')}
      >Modal</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('DrawerScreen')}
      >Drawer</ButtonTransparent>
      

      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('HideScreen')}
      >Hide</ButtonTransparent>
      
    </ScrollView>)
  }
}

