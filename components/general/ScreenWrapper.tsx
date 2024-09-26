import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface props {
  style: any;
  children: React.ReactNode;
}

const ScreenWrapper: React.FC<props> = ({ style, children }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 5 : top + 10;

  return (
    <View style={[styles.container, style, { paddingTop }]}>{children}</View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
});
