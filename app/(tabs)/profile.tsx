import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable, } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenWrapper from '@/components/screenWrapper'
import { getDoc, doc } from 'firebase/firestore'
import { auth, db } from '@/config/firebase'
import { UserData } from '@/types/commune'
import Avatar from '@/components/Avatar'
import { theme } from '@/helpers/theme'
import { Feather } from '@expo/vector-icons'
import { vh, vw } from '@/helpers/responsivesizes'
import Top from '@/components/top'
import Skeleton from '@/components/skeleton'
import { signOut } from 'firebase/auth'
import { router } from 'expo-router'

const profile = () => {

  const [currentUser, setCurrentUser] = useState<UserData | any>()
  const [error, setError] = useState("")

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

        return res

      }

    }
    catch (err: any) {
      setError(err.message)
      return { status: false, err }
    }
  }

  // if (error) {
  //   return <ScreenWrapper>
  //     <Text style={{ color: '#fff' }}>ERROR:
  //       {error}
  //     </Text>
  //   </ScreenWrapper>
  // }

  const logout = ()=>{
        signOut(auth)
        router.push('/')
  }

  return (
    <ScreenWrapper >


      <ScrollView
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}
      >
        {/* profile top */}
        <Top 
        ><Text style={style.header}>Profile</Text>
        <Pressable onPress={logout}>
          <Feather color={theme.gray.white} name='log-out' size={vh(3.5)}/>
        </Pressable></Top>


        {/* Avatar */}
        {currentUser ? <Avatar style={style.image} source={currentUser.profile} /> : <Skeleton size={{width:vw(30) , height:vw(30)}}/>}


        {/* user info */}
        <View style={style.userinfo}>

          {/* user name */}
          {currentUser ? <Text style={style.name}>{currentUser.userName}</Text>: <Skeleton size={{width:vw(70) , height:vw(2.5)}}/>}


          {/* bio */}
          {currentUser ? <Text style={style.bio}>{currentUser.bio ? currentUser.bio : 'no bio yet'}</Text>: <Skeleton size={{width:vw(60) , height:vw(2.1)}}/>}


          {/* email */}
          {currentUser ?
            <View style={style.email}>
              <Feather name='mail' size={vh(2.5)} color={theme.gray.gray2} />
              <Text style={style.emailtext} >{currentUser.userEmail}</Text>
            </View>: <Skeleton size={{width:vw(60) , height:vw(5)}}/>
          }

        
        </View>


          {/* call to action buttons */}
        <View style={style.btncont}>

          {/* edit btn */}
          <TouchableOpacity onPress={()=>{router.push('/editpage')}} style={style.btns}>
            <Text style={style.btntext}>Edit Profile</Text>
          </TouchableOpacity>

          {/* new post btn */}
          <TouchableOpacity style={[style.btns, { backgroundColor: theme.primary.normal }]}>
            <Text style={style.btntext}>New Post</Text>
          </TouchableOpacity>

        </View>

        

      </ScrollView>

      
    </ScreenWrapper>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,

  },
  image: {
    paddingVertical: 10,
  },

  //user info
  userinfo: {
    alignItems: 'center',
    padding: 20
  },
  name: {
    fontSize: vh(3),
    color: theme.primary.normal,
    fontWeight: 'bold',
    padding: 10
  },
  email: {
    flexDirection: 'row',
    gap: 10,
  },
  emailtext: {
    fontSize: vh(2.1),
    color: theme.gray.gray2
  },
  bio: {
    fontSize: vh(2),
    color: theme.gray.gray2
  },

  //button cont
  btncont: {
    flexDirection: 'row',
    width: "100%",
    gap: 5,

  },
  btns: {
    flex: 1,
    height: vh(7),
    backgroundColor: theme.gray.gray1,
    borderRadius: theme.curves.lg,
    borderCurve: 'continuous',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    color: theme.gray.white,
    fontSize: vh(2)
  },
  header:{
    color:'#fff',
    fontSize:vh(2.4),
    fontWeight:'bold'
  },

})

export default profile