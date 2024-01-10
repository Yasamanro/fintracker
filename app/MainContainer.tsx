import * as React from 'react';

import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './screens/Home'
import Settings from './screens/Settings';

// Screen Names
const homeName = 'Home';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName = {homeName}
                screenOptions = {({ route }) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === settingsName){
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Ionicons name={String(iconName)} size={size} color={color}/>
                    },
                })}
                >
                <Tab.Screen name={homeName} component={Home}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}