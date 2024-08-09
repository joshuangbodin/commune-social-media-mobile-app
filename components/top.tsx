import { View, StyleSheet } from 'react-native'
import React from 'react'
import { vw } from '@/helpers/responsivesizes';

interface props {
    
    children: React.ReactNode;
}

const Top = ({ children}: props) => {
    return (
        <View style={style.container}>
           {children}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        paddingVertical:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:5,
        width: '100%',
    }
})

export default Top