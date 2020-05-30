import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item55247Navigator from '../features/Add-Item55247/navigator';
import Maps55246Navigator from '../features/Maps55246/navigator';
import UserProfile55206Navigator from '../features/UserProfile55206/navigator';
import Maps55202Navigator from '../features/Maps55202/navigator';
import Add-Item55198Navigator from '../features/Add-Item55198/navigator';
import Maps55197Navigator from '../features/Maps55197/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Add-Item55247: { screen: Add-Item55247Navigator },
Maps55246: { screen: Maps55246Navigator },
UserProfile55206: { screen: UserProfile55206Navigator },
Maps55202: { screen: Maps55202Navigator },
Add-Item55198: { screen: Add-Item55198Navigator },
Maps55197: { screen: Maps55197Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
