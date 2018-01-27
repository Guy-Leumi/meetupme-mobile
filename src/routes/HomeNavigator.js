import {TabNavigator, TabBarBottom} from 'react-navigation';
import color from '../../src/constants/color';
import {
    HomeScreen, 
    NotificationsScreen,
    ProfileScreen
} from '../screens';


export default TabNavigator({
    Home:{
        screen : HomeScreen
    },
    Notifications:{
        screen: NotificationsScreen
    },
    Profile:{
        screen: ProfileScreen
    }
},{
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions:{
       inactiveTintColor: color.$blackBlueColor,
       activeTintColor: color.$redColor,
       style:{
           backgroundColor: color.$whiteColor
       }
    }
});