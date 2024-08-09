import { View, StyleSheet } from 'react-native'
import React from 'react'
import { vh } from '@/helpers/responsivesizes'
import { theme } from '@/helpers/theme'

interface props{
    size: {width:number , height:number  }
   styles?: any;
}

const Skeleton = ({size, styles}:props) => {
  return (
    <View style={[style.cont , size&&{width:size.width , height:size.height} ,  styles]}>
    </View>
  )
}

const style =  StyleSheet.create({
    cont:{
        width: vh(5),
        height: vh(5),
        backgroundColor: theme.primary.dark,
        borderRadius:theme.curves.full,
        padding:10,
        marginBottom:5
    }
})

export default Skeleton