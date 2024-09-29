import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/general/ScreenWrapper'
import ImageCont from '@/components/specific/write/ImageCont'
import CustomText from '@/components/general/text'
import { theme } from '@/constant/theme'
import { vh } from '@/helpers/responsivesizes'

const write = () => {
  return (
    <ScreenWrapper>
      {/* greetings */}
      <View style={[styles.greeting, styles.paddingHorizontal]}>
        <CustomText style={{ color: theme.green[700] }} size={vh(3)} isheader>
          Write
        </CustomText>
      </View>

      {/* Image */}
      <ImageCont/>

      {/*  */}
    </ScreenWrapper>
  )
}

export default write

const styles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  paddingLeft: {
    paddingLeft: 10,
  },
  greeting: {
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  }
})