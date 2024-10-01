import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { theme } from "../constants/theme";
import CustomText from "../components/general/typography";
import { router } from "expo-router";
import { BounceInDown, SlideInDown } from "react-native-reanimated";

const index = () => {
  useEffect(AutoRoute, []);

  function AutoRoute() {
    setTimeout(changeScreen, 4000);
  }

  function changeScreen() {
    router.push("/onboard1");
  }

  return (
    <View style={styles.screen}>
      <CustomText
        animation={SlideInDown.duration(400)}
        isHeader
        color={theme.colors.zinc_100}
        text={"Empathia"}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.green_400,
  },
});
