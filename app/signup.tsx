import { View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { theme } from '@/helpers/theme'
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { vh, vw } from '@/helpers/responsivesizes'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Buttons from '@/components/buttons'
import { router } from 'expo-router'
import { auth, db } from '@/config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'




const signup = () => {
    //safe area config
    const {top} = useSafeAreaInsets();
    const paddingTop = top > 0 ? top+10 : top+20

      //user values
      const[name, setName] = useState('')      
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [loading, setLoading] = useState(false)

      //form submit
      const submit = async()=>{
        if(!email && !password){
            Alert.alert('Log In' , "Please Fill all Fields, Thank you.");
            return;
        }

        setLoading(true)
        let username = name.trim()
        let useremail = email.trim()
        let userpassword = email.trim()
        try{
        await createUserWithEmailAndPassword(auth , useremail , userpassword);
        const user = auth.currentUser;
        
        if(user){
            await updateProfile(user, {
            displayName: username
          })
          
          await setDoc(doc(db, "Users" , user.uid ) , {
            userName : username,
            userEmail : useremail,
          })
        }

        Alert.alert('sign up' , 'User Created , Now Proceed to Log In');
        router.push('/login')
        }
        catch(err:any){
            Alert.alert('Sign Up Error' , JSON.stringify(err.code))
        }
        setLoading(false)
      }
 
  return (
    <View style={[style.container , {paddingTop}]}>
      {/* go back */}
      <TouchableOpacity onPress={()=> router.back()} style={style.gobackbtn}>
        <FontAwesome6 size={vw(5)} color={theme.gray.white} name="chevron-left"/>
      </TouchableOpacity>

      {/* greeting */}
      <View style={style.greetingcnt}>
        <Text style={style.greeting}>Let's</Text>
        <Text style={style.greeting}>Get Started</Text>
      </View>


      {/* login form */}
      <View style={style.form}>
        <Text style={style.formtext}>Please Provide the information to cretae an account</Text>
        <View style={style.forminput}>
            <Ionicons size={vh(4)} color={theme.gray.gray2} name="person"/>
            <TextInput
            value={name}
            onChangeText={setName}
            placeholder='enter your User name'
            placeholderTextColor={theme.gray.gray2}
            style={style.textbox}
            ></TextInput>
        </View>
        <View style={style.forminput}>
            <Ionicons size={vh(4)} color={theme.gray.gray2} name="mail"/>
            <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder='enter your email'
            placeholderTextColor={theme.gray.gray2}
            style={style.textbox}
            ></TextInput>
        </View>
        <View style={style.forminput}>
            <Feather size={vh(4)} color={theme.gray.gray2} name="lock"/>
            <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder='enter your Password'
            placeholderTextColor={theme.gray.gray2}
            style={style.textbox}
            secureTextEntry
            ></TextInput>
        </View>
       
        {loading?<ActivityIndicator color={theme.primary.normal}/>:<Buttons onPress={submit} text='Sign Up' ></Buttons>}
      </View>


      {/* sign in */}
      <View style={style.login}>
                    <Text style={style.formtext}>Already Have An Account?</Text>
                    <Pressable onPress={()=> router.push('/login')}>
                        <Text style={[style.formtext, {
                            color: theme.primary.normal,
                            fontSize: vh(1.8)
                        }]}>
                            Log In</Text>
                    </Pressable>
                </View>

    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.primary.black, 
        paddingHorizontal:10,
        
    },

    //goback
    gobackbtn:{
        width:vw(10),
        height: vw(10),
        backgroundColor:theme.primary.darker,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: theme.curves.full,
    },

    //greeting
    greetingcnt:{
        paddingVertical:20,
    },
    greeting:{
        color: theme.gray.white,
        fontSize: vh(3.5),
    },

    //form
    form:{
        height:vh(60),
        justifyContent:'space-around',
    },
    formtext:{
        color:theme.gray.gray2
    },
    forminput:{
        alignItems:'center',
        flexDirection:'row',
        width: vw(95),
        height:vh(8),
        padding:10,
        borderWidth:1,
        borderColor:theme.gray.gray2,
        borderRadius:theme.curves.lg,
        borderCurve:'continuous',
        justifyContent:'space-around'
    },
    textbox:{
        flex:1,
        height:'100%',
        borderWidth:0,
        marginLeft:10,
        fontSize:vh(2),
        color:theme.gray.gray2,
    },

     //login text
     login: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        alignItems:'center',
        gap:5,
    },


})

export default signup