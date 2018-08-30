
import { createStackNavigator } from 'react-navigation'
import {IndexScreen} from './IndexScreen.js'
import {FlexScreen} from './screens/FlexScreen.js'
import {BoxScreen} from './screens/BoxScreen.js'
import {ProviderScreen} from './screens/ProviderScreen.js'
import {ButtonScreen} from './screens/ButtonScreen.js'
import {ButtonOutlineScreen} from './screens/ButtonOutlineScreen.js'
import {ButtonCircleScreen} from './screens/ButtonCircleScreen.js'
import {ButtonTransparentScreen} from './screens/ButtonTransparentScreen.js'
import {CloseScreen} from './screens/CloseScreen.js'
import {TextScreen} from './screens/TextScreen.js'
import {HeadingScreen} from './screens/HeadingScreen.js'
import {SubheadScreen} from './screens/SubheadScreen.js'
import {CapsScreen} from './screens/CapsScreen.js'
import {SmallScreen} from './screens/SmallScreen.js'
import {LeadScreen} from './screens/LeadScreen.js'
import {TruncateScreen} from './screens/TruncateScreen.js'
import {BlockquoteScreen} from './screens/BlockquoteScreen.js'
import {PreScreen} from './screens/PreScreen.js'
import {CodeScreen} from './screens/CodeScreen.js'
import {MeasureScreen} from './screens/MeasureScreen.js'
import {LabelScreen} from './screens/LabelScreen.js'
import {DividerScreen} from './screens/DividerScreen.js'
import {BorderScreen} from './screens/BorderScreen.js'
import {ImageScreen} from './screens/ImageScreen.js'
import {AvatarScreen} from './screens/AvatarScreen.js'
import {ContainerScreen} from './screens/ContainerScreen.js'
import {RowScreen} from './screens/RowScreen.js'
import {ColumnScreen} from './screens/ColumnScreen.js'
import {CardScreen} from './screens/CardScreen.js'
import {PanelScreen} from './screens/PanelScreen.js'
import {ProgressScreen} from './screens/ProgressScreen.js'
import {BannerScreen} from './screens/BannerScreen.js'
import {MessageScreen} from './screens/MessageScreen.js'
import {TabsScreen} from './screens/TabsScreen.js'
import {TabScreen} from './screens/TabScreen.js'
import {BadgeScreen} from './screens/BadgeScreen.js'
import {CircleScreen} from './screens/CircleScreen.js'
import {DotScreen} from './screens/DotScreen.js'
import {ArrowScreen} from './screens/ArrowScreen.js'
import {PositionScreen} from './screens/PositionScreen.js'
import {AbsoluteScreen} from './screens/AbsoluteScreen.js'
import {RelativeScreen} from './screens/RelativeScreen.js'
import {ModalScreen} from './screens/ModalScreen.js'
import {DrawerScreen} from './screens/DrawerScreen.js'
import {HideScreen} from './screens/HideScreen.js'

export const RootStack = createStackNavigator(
  {
    IndexScreen,
    FlexScreen,
    BoxScreen,
    ProviderScreen,
    ButtonScreen,
    ButtonOutlineScreen,
    ButtonCircleScreen,
    ButtonTransparentScreen,
    CloseScreen,
    TextScreen,
    HeadingScreen,
    SubheadScreen,
    CapsScreen,
    SmallScreen,
    LeadScreen,
    TruncateScreen,
    BlockquoteScreen,
    PreScreen,
    CodeScreen,
    MeasureScreen,
    LabelScreen,
    DividerScreen,
    BorderScreen,
    ImageScreen,
    AvatarScreen,
    ContainerScreen,
    RowScreen,
    ColumnScreen,
    CardScreen,
    PanelScreen,
    ProgressScreen,
    BannerScreen,
    MessageScreen,
    TabsScreen,
    TabScreen,
    BadgeScreen,
    CircleScreen,
    DotScreen,
    ArrowScreen,
    PositionScreen,
    AbsoluteScreen,
    RelativeScreen,
    ModalScreen,
    DrawerScreen,
    HideScreen
  },
  {
    initialRouteName: 'IndexScreen'
  }
)
