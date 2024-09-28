import { FontAwesome6, Feather } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";
import { vh, vw } from "@/helpers/responsivesizes";
import { View } from "react-native";
import { BlurView } from "expo-blur";
import { theme } from "@/constant/theme";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        
        headerShown: false,
        tabBarStyle: {
          position:'absolute',
          height: vh(9),
          marginHorizontal: vw(15),
          bottom: 25,
          backgroundColor: theme.opaque[100](.3),
          padding: 3,
          paddingHorizontal: 5,
          borderRadius: 100,
          borderCurve: "continuous",
          borderWidth: 0,
          //elevation: 0,
          //shadowOpacity: 0.2,
          // shadowColor:'gray',
          // shadowOffset:{
          //   width:0,height:0
          // },
          // shadowRadius:20
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.green[500],
        tabBarActiveBackgroundColor: theme.green[50],
        tabBarInactiveTintColor:theme.green[400],
        tabBarItemStyle: {
          borderRadius: 100,
         
        },
        tabBarBackground: ()=>(<BlurView intensity={100} style={{backgroundColor:'white', flex:1 , 
          borderWidth: 1,
          borderColor:theme.opaque[100](.4),
          borderRadius: 100,
          elevation: 0,
          shadowOpacity: 0.2,
          shadowColor:'gray',
          shadowOffset:{
            width:0,height:0
          },
          shadowRadius:20
        }}></BlurView>)
      
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="home" />
          ),
        }}
        name="feed"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="compass" />
          ),
        }}
        name="explore"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="pen-tool" />
          ),
        }}
        name="write"
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="user" />
          ),
        }}
        name="profile"
      />
    </Tabs>
  );
};

export default _layout;
