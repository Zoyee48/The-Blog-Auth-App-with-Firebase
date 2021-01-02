import React from 'react';
import {NavigationContainer, navigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {  AntDesign ,Ionicons ,Entypo } from "@expo/vector-icons";
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import SignInScreenActivity from './Source/screens/SignInScreen'
import SignUpScreenActivity from './Source/screens/SignUpScreen'
import HomeScreenActivity from './Source/screens/Home'
import ProfileScreenActivity from './Source/screens/ProfileScreen'
import NotificationScreenActivity from './Source/screens/NotificationScreen'
import IndividualPostScreen from './Source/screens/IndividualPost'
import { AuthContext, AuthProvider } from "./Source/provider/AuthProvider";
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDzD9oPrLeUev5XDAnu0CKnxL194zd0bAQ",
  authDomain: "blogauthapp.firebaseapp.com",
  projectId: "blogauthapp",
  storageBucket: "blogauthapp.appspot.com",
  messagingSenderId: "9179912639",
  appId: "1:9179912639:web:1bd75d080d19c15d4a690a"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


const AuthStack= createStackNavigator();
const HomeStack =createStackNavigator();
const NotificationStack=createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator();
const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => {
  return (
    <AppDrawer.Navigator  initialRouteName="Home">
      <AppDrawer.Screen name="Home" component={HomeTabScreen} />
      <AppDrawer.Screen name="Profile" component={ProfileScreenActivity} />
    </AppDrawer.Navigator>
  );
};

const HomeTabScreen = () => {
  return (
    <AuthContext.Consumer>
        {(auth) => (
    <HomeTab.Navigator initialRouteName="Home">
      <HomeTab.Screen
        name="Home"
        component={HomeStackScreen}
        
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" color="white" size={26} />
            ) : (
              <AntDesign name="home" color="white" size={22} />
            ),
        }}
      />
      <HomeTab.Screen
        name="Notification"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-notifications" size={26} color="white" />
            ) : (
              <Ionicons
                name="ios-notifications-outline"
                size={22}
                color="white"
              />
            ),
        }}
      />
    </HomeTab.Navigator>
     )}
     </AuthContext.Consumer>
  );
};

const NotificationStackScreen=() =>{
  return(
    <NotificationStack.Navigator initialRouteName="Notification">
      <NotificationStack.Screen name="Notification" component={NotificationScreenActivity}  options={{ headerShown: false }}/>
      <NotificationStack.Screen name="IndivialPost" component={IndividualPostScreen}  options={{ headerShown: false }}/>
    </NotificationStack.Navigator>
  )
}

const HomeStackScreen=() =>{
  return(
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreenActivity}  options={{ headerShown: false }}/>
      <HomeStack.Screen name="IndivialPost" component={IndividualPostScreen}  options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  )
}

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreenActivity}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreenActivity}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};


export default function App() {

  
  
  return (

    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer >
             {auth.IsLoggedIn ? <AppDrawerScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
    
    
   
  );
}
