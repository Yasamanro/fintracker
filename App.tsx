import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppleHealthKit from "react-native-health";

// Screens
import Login from "./app/screens/Login";
import Home from "./app/screens/Home";
import Settings from "./app/screens/Settings";
import appleHealthKit from "react-native-health";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const InsideStack = createNativeStackNavigator();

// function InsideLayout(){
//   return (
//     <InsideStack.Navigator>
//       <InsideStack.Screen name="HomePage" component={Home} options={{headerShown: false}} />
//     </InsideStack.Navigator>
//   )
// }

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home Page",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  appleHealthKit.isAvailable(()=> {});

  // Handle the state of the user so we don't have to manually track and navigate users to the right page
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {user ? (
          <>
            {/* <Stack.Screen name="HomePage" component={Home} /> */}
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     {user ? (
    //       <Stack.Screen
    //         name="Inside"
    //         component={InsideLayout}
    //         options={{ headerShown: false }}
    //       />
    //     ) : (
    //       <Stack.Screen
    //         name="Login"
    //         component={Login}
    //         options={{ headerShown: false }}
    //       />
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
