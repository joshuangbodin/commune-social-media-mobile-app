import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import { vh, vw } from "@/helpers/responsivesizes";
import CustomText from "@/components/general/text";
import {
  AntDesign,
  Feather,
  FontAwesome6,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { theme } from "@/constant/theme";

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
            style={[{ color: theme.green[100] }]}
            size={vh(1.9)}
            isSupporting
            text="Welcome to Serenity"
          />
          <CustomText
            style={styles.info_text}
            size={vh(4)}
            isheader
            text="Discover and "
          />
          <CustomText
            style={styles.info_text}
            size={vh(4)}
            isheader
            text="Write Mental Health"
          />
          <CustomText
            style={styles.info_text}
            size={vh(4)}
            isheader
            text="Articles On Our Blog."
          />
        </View>

        {/* call to action */}
        <View style={styles.info_btn_container}>
          {/* log in button */}
          <TouchableOpacity style={styles.info_btn_2}>
            <AntDesign color={theme.green[100]} size={vh(3)} name="login" />
          </TouchableOpacity>

          {/* get started button */}
          <TouchableOpacity
            onPress={() => router.push("/feed")}
            style={styles.info_btn}
          >
            <BlurView intensity={40} style={styles.info_btn_blur} />
            <View style={styles.info_btn_left}>
              <Ionicons size={vh(2.3)} name="paper-plane-outline" />
            </View>
            <CustomText style={{ color: theme.green[50] }}>
              Get Started
            </CustomText>
            <View
              style={[styles.info_btn_left, { backgroundColor: "transparent" }]}
            >
              <Feather
                size={vh(3.3)}
                color={theme.green[100]}
                name="chevrons-right"
              />
            </View>
          </TouchableOpacity>
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
    paddingHorizontal: 15,
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
    minHeight: vh(38),
    height: "auto",
    maxHeight: 500,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  info_text: {
    color: theme.green[50],
    fontWeight: "600",
  },
  info_btn_container: {
    height: vh(15),
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  info_btn: {
    flex: 1,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    backgroundColor: theme.opaque[100](0.15),
    paddingHorizontal: 5,
    paddingTop: 3,
    overflow: "hidden",
    height: vh(9),
    borderRadius: 10000,
  },
  info_btn_left: {
    height: vh(8),
    width: vh(8),
    backgroundColor: theme.green[100],
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
  info_btn_2: {
    width: vh(8),
    height: vh(8),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.green[400],
    borderRadius: 1000,
  },
});
