import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {theme} from "../../constants/theme"

const ScreenWrapper = ({children, style}) => {
  return (
   <SafeAreaView style={[styles.container , style]}>
     {children}
   </SafeAreaView>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.colors.zinc_50,
        flex:1,
    }
})