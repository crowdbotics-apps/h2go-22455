import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile170081Navigator from '../features/UserProfile170081/navigator';
import Maps170062Navigator from '../features/Maps170062/navigator';
import Settings170040Navigator from '../features/Settings170040/navigator';
import Settings170025Navigator from '../features/Settings170025/navigator';
import NotificationList170024Navigator from '../features/NotificationList170024/navigator';
import Maps170023Navigator from '../features/Maps170023/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile170081: { screen: UserProfile170081Navigator },
Maps170062: { screen: Maps170062Navigator },
Settings170040: { screen: Settings170040Navigator },
Settings170025: { screen: Settings170025Navigator },
NotificationList170024: { screen: NotificationList170024Navigator },
Maps170023: { screen: Maps170023Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
