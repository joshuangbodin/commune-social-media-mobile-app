import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import { vh, vw } from "@/helpers/responsivesizes";

const index = () => {
  return (
    <ScreenWrapper style={styles.container}>
      {/* bg image */}
      <Image
        style={styles.image_background}
        source={require("../assets/appimages/signup.jpg")}
      />

      {/* onboarding info */}
      <View></View>
    </ScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: vw(100),
    height: vh(100),
  },
  image_background: {
    position: "absolute",
    width: vw(100),
    height: vh(100),
    top: 0,
    left: 0,
    objectFit: "cover",
  },
});
