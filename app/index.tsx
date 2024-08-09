import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { vh, vw } from '@/helpers/responsivesizes'
import { theme } from '@/helpers/theme'

import { auth } from '@/config/firebase'






const index = () => {
    const router = useRouter()
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                router.push('/home')
            }else{
                router.push('/splash')
            }
        })
    }
    
    )
    return (
        <View style={style.container}>
            
            <Text style={style.logotext}>Commune</Text>
            <ActivityIndicator color={theme.primary.normal}/>

        </View>
    )
}

const style = StyleSheet.create({
    //splash image
    container: {
        flex: 1,
        backgroundColor: theme.primary.black,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
   logotext:{
        fontSize: vh(4),
        color:theme.primary.normal,
        textTransform:'uppercase',
        fontWeight:'bold',
        letterSpacing:1,
        textShadowColor:theme.primary.normal,
        textShadowOffset:{
            width:5,
            height:25
        },
        textShadowRadius:10
   }
})

export default index