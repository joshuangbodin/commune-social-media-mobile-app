import { FontAwesome6, Feather } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";
import { vh } from "@/helpers/responsivesizes";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: vh(9),
          marginHorizontal: 45,
          bottom: 25,
          padding: 2.5,
          paddingHorizontal: 5,
          borderRadius: 100,
          borderCurve: "continuous",
          borderWidth: 0,
          elevation: 0,
          shadowOpacity: 100,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "green",
        tabBarActiveBackgroundColor: "lightgreen",
        tabBarItemStyle: {
          borderRadius: 100,
          height: vh(8.5),
          width: vh(8.5),
        },
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
