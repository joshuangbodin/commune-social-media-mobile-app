import { FontAwesome6, Feather } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";
import { vh, vw } from "@/helpers/responsivesizes";
import { View } from "react-native";
import { BlurView } from "expo-blur";

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
          padding: 3,
          paddingHorizontal: 5,
          borderRadius: 100,
          borderCurve: "continuous",
          borderWidth: 0,
          elevation: 0,
          shadowOpacity: 0.2,
          shadowColor:'gray',
          shadowOffset:{
            width:0,height:0
          },
          shadowRadius:20
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "black",
        tabBarItemStyle: {
          borderRadius: 100,
         
        },
        tabBarBackground: ()=> <BlurView>
          
        </BlurView>
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
