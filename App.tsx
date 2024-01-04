import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './app/screens/Login'
import Home from './app/screens/Home'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="HomePage" component={Home} />
    </InsideStack.Navigator>
  )
}

export default function App() {
  
  // Handle the state of the user so we don't have to manually track and navigate users to the right page
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    })
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false}}/>
        ) : (
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
