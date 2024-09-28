import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "@/constant/theme";
import { LinearGradient } from "expo-linear-gradient";

interface props {
  style?: any;
  children?: React.ReactNode;
}

const ScreenWrapper: React.FC<props> = ({ style, children }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : top + 10;

  return (
    <LinearGradient colors={[theme.green[50] , theme.opaque[100](.08)]} style={[styles.container, style, { paddingTop }]}>{children}</LinearGradient>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    //paddingHorizontal: 10,
    flex:1,
  },
});
