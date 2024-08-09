import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { vh, vw } from '@/helpers/responsivesizes'
import { theme } from '@/helpers/theme'


const _layout = () => {
  return (
   <Tabs  screenOptions={{
    headerShown:false ,
    tabBarStyle:{
      
      position:'absolute',
       width:vw(100),
       height: vh(10),
       alignSelf:'center',
       borderRadius:theme.curves.lg,
       borderWidth:0,
       backgroundColor:theme.primary.darker,
      
       
       },
       tabBarActiveTintColor:theme.primary.normal,
       
       }}>
     <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={25} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="messaging"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="message-circle" size={25} color={color} />
          ),
        }}
      />
      
       <Tabs.Screen
        name="notification"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={25} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={25} color={color} />
          ),
        }}
      />
   </Tabs>
  )
}

export default _layout