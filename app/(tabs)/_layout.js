import React from "react";
import { Tabs } from "expo-router";
import {Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { vh } from "../../helpers/responsivesizes";
import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabbar,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: theme.colors.green_400,
        tabBarInactiveTintColor: theme.colors.zinc_800
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={vh(3.4)} color={color} name="house-chimney-window" />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons size={vh(3.4)} color={color} name="compass" />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons size={vh(3.4)} color={color} name="calendar" />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons size={vh(3.4)} color={color} name="mail" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({
    tabbar:{
        height:vh(8.5)
    }
})