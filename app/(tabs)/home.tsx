import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/helpers/theme';
import { vh } from '@/helpers/responsivesizes';
import ScreenWrapper from '@/components/screenWrapper';
import {getStorage , ref, uploadBytes} from 'firebase/storage'

const home = () => {

  //const data = require('../../assets/images/splashimage')

  useEffect(()=>{
   
  },[])
 
  return (
   <ScreenWrapper>
      
    {/* top section */}
    <View style={style.top}>
      <Text style={style.logotext}>COMMUNE</Text>
    </View>

    <View>
      
    </View>

    </ScreenWrapper>
  )
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: theme.primary.black, 
      paddingHorizontal:10,
  },
  // top
  top:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  logotext:{
    color:theme.primary.normal,
    fontSize: vh(2),
    fontWeight:'bold',
    letterSpacing:1,
    textShadowColor:theme.primary.normal,
        textShadowOffset:{
            width:0,
            height:15
        },
        textShadowRadius:10
  }


})

export default home