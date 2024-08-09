import { View, Text, ScrollView , StyleSheet, Pressable, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '@/components/screenWrapper'
import Top from '@/components/top'
import { vh, vw } from '@/helpers/responsivesizes'
import { auth, db } from '@/config/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { UserData } from '@/types/commune'
import Avatar from '@/components/Avatar'
import Skeleton from '@/components/skeleton'
import { EvilIcons, Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { theme } from '@/helpers/theme'
import * as ImagePicker from 'expo-image-picker';
import Buttons from '@/components/buttons'
import { router } from 'expo-router'
import { updateProfile } from 'firebase/auth'
import { uploadImage } from '@/appFunctionalities/upload'
import { getDownloadURL } from 'firebase/storage'

interface datatype{
  userName : string;
  userEmail: string,
  bio: string,
  phoneNumber:string,
  occupation:string,
  profile:any,
}


const editpage = () => {
    const [currentUser, setCurrentUser] = useState<UserData | any>()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const [userInfo, setUserInfo]= useState<datatype>({
        userName : '',
        userEmail: '',
        bio: '',
        phoneNumber:'',
        occupation:'',
        profile:{uri:''},
    })
  
    useEffect(
      () => {
  
        console.log(getUserData())
      }
      , []
    )

    const getUserData = async () => {
        try {
          const user = auth.currentUser
          if (user) {
            const data = await getDoc(doc(db, "Users", user.uid))
            const res = { ...data.data(), userId: data.id }
            setCurrentUser({ ...data.data(), userId: data.id })

            setUserInfo({
                userName: currentUser.userName,
                userEmail: currentUser.userEmail,
                bio:'',
                phoneNumber:'',
                occupation:'',
                profile:{uri:''},
            })
    
            return res
    
          }
    
        }
        catch (err: any) {
          setError(err.message)
          return { status: false, err }
        }
      }


    const pickImage = async ()=>{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect:[1,1],
        quality:0.7,
      })

      if (!result.canceled) {
        setUserInfo({...userInfo , profile:result.assets[0]});
      }
    }

    const submit = async ()=>{
        let data = {...userInfo};
        let {userName, phoneNumber, userEmail , profile, bio, occupation } = data

        if(!userName || !phoneNumber || !userEmail || !profile || !bio || !occupation){
          Alert.alert('Edit Profile', 'Please fill all the fields.')
          return;
        }

        setLoading(true)
        if(typeof profile == 'object'){
          let imageRes = await uploadImage('profiles',profile.uri)
          if(imageRes?.status){
            
            data.profile = await getDownloadURL(imageRes.msg.ref);
            console.log(data.profile)
            setLoading(false)
            
          }else{
            setLoading(false)
            return;
          }
        }

        const user = auth.currentUser;
        
        if(user){
           
          try{
          await setDoc(doc(db, "Users" , user.uid ) , {
            ...data
          })

          setUserInfo({...data , ...currentUser})
        }
        catch(err){
            console.log('error')
            setLoading(false)
        }
      }
    }


    

  return (
    <ScreenWrapper>
        
        <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}
        
      >
         {/* profile top */}
         <Top>
            <TouchableOpacity onPress={()=> router.back()} style={style.gobackbtn}>
              <FontAwesome6 size={vw(5)} color={theme.gray.white} name="chevron-left"/>
            </TouchableOpacity>

            <Text style={style.header}> Edit Profile</Text>

            <View></View>
       </Top>

        {/* Avatar */}
        {currentUser ?
         <View style={style.imagecont}>
            <Avatar style={style.image} source={userInfo.profile.uri? userInfo.profile.uri:currentUser.profile} />

            <Pressable onPress={pickImage} style={style.editbtn}>
                <FontAwesome6 size={vh(2)} name='camera'/>
            </Pressable>
        </View> 
        : 
        <Skeleton size={{width:vw(30) , height:vw(30)}}/>}

         {/* login form */}
      <View style={style.form}>
        <Text style={style.formtext}>Please Provide the information to cretae an account</Text>
        <View style={style.forminput}>
            <Ionicons size={vh(4)} color={theme.gray.gray2} name="person"/>
            <TextInput
            value={userInfo.userName}
            onChangeText={(value) => setUserInfo({...userInfo , userName:value })}
            placeholder='enter your User name'
            placeholderTextColor={theme.gray.gray2}
            style={style.textbox}
            ></TextInput>
        </View>
        <View style={style.forminput}>
            <Ionicons size={vh(4)} color={theme.gray.gray2} name="mail"/>
            <TextInput
            value={userInfo.userEmail}
            onChangeText={(value) => setUserInfo({...userInfo , userEmail:value })}
            placeholder='enter your email'
            placeholderTextColor={theme.gray.gray2}
            style={style.textbox}
            ></TextInput>
        </View>
        <View style={style.forminput}>
            <FontAwesome6 size={vh(4)} color={theme.gray.gray2} name="gears"/>
            <TextInput
            value={userInfo.occupation}
            onChangeText={(value) => setUserInfo({...userInfo , occupation:value })}
            placeholder='enter your occupation'
            placeholderTextColor={theme.gray.gray2}
            style={style.textbox}
            ></TextInput>
        </View>
        <View style={style.forminput}>
            <Feather size={vh(4)} color={theme.gray.gray2} name="phone"/>
            <TextInput
            value={userInfo.phoneNumber}
            onChangeText={(value) => setUserInfo({...userInfo , phoneNumber:value })}
            placeholder='enter your Phone Number '
            placeholderTextColor={theme.gray.gray2}
            style={style.textbox}
            ></TextInput>
        </View>
        <View style={[style.forminput , {minHeight:vh(20)}]}>
            
            <TextInput
            value={userInfo.bio}
            onChangeText={(value) => setUserInfo({...userInfo , bio:value })}
            placeholder='Add Bio... '
            placeholderTextColor={theme.gray.gray2}
            style={[style.textbox ]}
            multiline
            
            ></TextInput>
        </View>
          
         {loading?<ActivityIndicator color={theme.primary.normal}/>: <Buttons styles={{width:vw(94)}} onPress={submit} text='update'>
          </Buttons>}
        </View>

      </ScrollView>
    </ScreenWrapper>
  )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 20,
      paddingBottom:550,
      },

      header:{
        color:'#fff',
        fontSize:vh(2.4),
        fontWeight:'bold',
        flex:1,
      },


      //image

      imagecont:{
        position:'relative'
      },

      image: {
        paddingVertical: 10,
      },
    


      editbtn:{
        width:vh(3),
        height: vh(3),
        backgroundColor: theme.gray.gray3,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: theme.curves.full,
        padding:10,
        position:'absolute',
        right:1,
        bottom:1,
        shadowColor:theme.gray.gray1,
        shadowOffset:{
            width:-1,
            height:-1
        }
        ,
        shadowOpacity:.6,
        shadowRadius:5,
        elevation:10,

    },

       //form
       form:{
        padding:10,
        gap:18,
        alignSelf:'center',
        justifyContent:'space-around',
        paddingTop:50,
        
    },
    formtext:{
        color:theme.gray.gray2
    },
    forminput:{
        alignItems:'center',
        flexDirection:'row',
        width: vw(94),
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
    gobackbtn:{
      width:vw(10),
      height: vw(10),
      backgroundColor:theme.primary.darker,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: theme.curves.full,
  },
})

export default editpage