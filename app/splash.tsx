import { View, Text, Pressable, Image , StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '@/helpers/theme'
import { vh, vw } from '@/helpers/responsivesizes'
import Buttons from '@/components/buttons'
import { useRouter } from 'expo-router'

const splash = () => {
    const router = useRouter()
    return (
        <View style={style.container}>
            <Image style={style.image} source={require('../assets/images/splashimage.png')} />

            {/* text info */}
            <View style={style.textcontainer}>
                <View style={style.textheader}>
                    <Text style={style.header}>The Best Social App To</Text>
                    <Text style={style.header}>Learn With Friends!</Text>
                </View>
                <View style={style.textsupporting}>
                    <Text style={style.supporting}>Find people with the same learning</Text>
                    <Text style={style.supporting}>interests as you</Text>
                </View>
            </View>


            {/* get started button */}
            <View>
                <Buttons text='Get Started' onPress={() => { router.push('/login') }} />
                <View style={style.login}>
                    <Text style={style.supporting}>Already Have An Account?</Text>
                    <Pressable onPress={()=> router.push('/login')}>
                        <Text style={[style.supporting, {
                            color: theme.primary.normal,
                            fontSize: vh(1.8)
                        }]}>
                            Log In</Text>
                    </Pressable>
                </View>
            </View>

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
    image: {
        width: vw(80),
        height: vw(80),
        objectFit: 'cover',

    },

    //text cont
    textcontainer: {

    },
    textheader: {

    },
    header: {
        color: theme.gray.white,
        fontSize: vh(3),
        textTransform: 'capitalize',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textsupporting: {
        padding: 15
    },
    supporting: {
        color: theme.gray.gray2,
        fontSize: vh(1.5),
        textTransform: 'capitalize',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 5,
    },

    //login text
    login: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        alignItems:'center'
    }
})

export default splash