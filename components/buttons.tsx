import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { vh, vw } from '@/helpers/responsivesizes';
import { theme } from '@/helpers/theme';

interface props{
    text : string;
    onPress : ()=> void;
    styles?: any;
}

const Buttons = ({text ,styles, onPress}:props) => {
  return (
   <TouchableOpacity style={[style.btnouter, styles]} onPress={onPress}>
    <View style={style.btninner}>
       <Text style={style.btntext}>{text}</Text> 
    </View>
   </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    btnouter:{
        width: vw(95),
        height: vh(8),
        justifyContent:'center',
        alignItems:'center',
        borderColor: theme.primary.normal,
        borderWidth: 1.5,
        borderRadius: theme.curves.xl,
        borderCurve:'continuous',
        padding:4
        
    },
    btninner:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.primary.normal,
        borderRadius: theme.curves.lg,
        borderCurve:'continuous',
    }
    ,btntext:{
        fontSize:vh(2),
        fontWeight:'bold',
        color: theme.gray.white
    }
})

export default Buttons