import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import { vh, vw } from "@/helpers/responsivesizes";
import CustomText from "@/components/general/text";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme/theme";
import { BlurView } from "expo-blur";

const index = () => {
  return (
    <ScreenWrapper style={styles.container}>
      {/* bg image */}
      <Image
        style={styles.image_background}
        source={require("../assets/appimages/signup.jpg")}
      />

      {/* onboarding info */}
      <View style={styles.info_box}>
        {/* text */}
        <View>
          <CustomText
            style={styles.info_text}
            size={vh(4.5)}
            isheader
            text="Learn About"
          />
          <CustomText
            style={styles.info_text}
            size={vh(4.5)}
            isheader
            text="Your Mental Health"
          />
          <CustomText
            style={styles.info_text}
            size={vh(4.5)}
            isheader
            text="here on Serenity."
          />
        </View>

        {/* call to action */}
        <View style={styles.info_btn_container}>
          <Pressable style={styles.info_btn}>
            <BlurView style={styles.info_btn_blur} />
            <View style={styles.info_btn_left}>
              <Feather size={vh(3.3)} name="arrow-up-right" />
            </View>
            <CustomText style={{ color: "white" , }}>Explore Now</CustomText>
            <View style={[styles.info_btn_left,{backgroundColor:'transparent'}]}>
              <Feather size={vh(3.3)}  color={"gray"} name="chevrons-right" />
            </View>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: vw(100),
    height: vh(100),
    justifyContent: "flex-end",
    paddingHorizontal:10,
  },
  image_background: {
    position: "absolute",
    width: vw(100),
    height: vh(100),
    top: 0,
    left: 0,
    objectFit: "cover",
  },
  info_box: {
    minHeight: vh(35),
    height: "auto",
    maxHeight: 500,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  info_text: {
    color: "white",
    fontWeight: "500",
    lineHeight: vh(5),
  },
  info_btn_container: {
    height: vh(15),
    justifyContent: "center",
    
    //backgroundColor: "red",
  },
  info_btn: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    paddingHorizontal: 5,
    paddingTop: 3,
    overflow: "hidden",
    height: vh(9),
    borderRadius: 10000,
    //backgroundColor: 'rgba(250,250,250,.2)'
  },
  info_btn_left: {
    height: vh(8),
    width: vh(8),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
  },
  info_btn_blur: {
    position: "absolute",
    width: vw(100),
    height: vh(20),
    left: -4,
    top: -4,
  },
});
