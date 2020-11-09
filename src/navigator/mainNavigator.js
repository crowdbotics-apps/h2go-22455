import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings170040Navigator from '../features/Settings170040/navigator';
import Settings170025Navigator from '../features/Settings170025/navigator';
import NotificationList170024Navigator from '../features/NotificationList170024/navigator';
import Maps170023Navigator from '../features/Maps170023/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
