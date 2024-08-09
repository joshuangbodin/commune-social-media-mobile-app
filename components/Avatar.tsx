import {Image , StyleSheet, View} from 'react-native'
import React from 'react'
import { vw } from '@/helpers/responsivesizes';
import { theme } from '@/helpers/theme';

interface props{
    source?: any;
    style?: any;
}

const Avatar = ({source, style}:props) => {
  return (
    <View>
    <Image style={[styles.image , style]} resizeMode='cover' source={typeof source === 'string'? {uri:source}: require("../assets/images/avatar.jpg")}/>
    </View>
  )
}

const styles= StyleSheet.create({
  image:{
    width: vw(30),
    height: vw(30),
    borderRadius: theme.curves.full
  }
})

export default Avatar