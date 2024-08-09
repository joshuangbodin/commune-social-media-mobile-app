import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { vh, vw } from '@/helpers/responsivesizes'
import { theme } from '@/helpers/theme'

const TabBar = () => {
  return (
    <View>
        <View style={style.container}>
      
        </View>
    </View>
  )
}


const style = StyleSheet.create({
    container:{
        position:'absolute',
        bottom: vh(2),
        width: vw(95),
        height: vh(10),
        backgroundColor: theme.primary.darker,
        
    }
})

export default TabBar