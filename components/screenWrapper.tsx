import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { theme } from '@/helpers/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface props{
    children? : React.ReactNode;
    styles?: any;
}

const ScreenWrapper = ({children, styles}:props) => {
    const {top} = useSafeAreaInsets();
    const paddingTop = top > 0 ? top+10 : top+20
  
  return (
    <View style={[style.container , {paddingTop} , styles]}>
      
        {children}

    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.primary.black, 
        paddingHorizontal:10,
    },
})


export default ScreenWrapper