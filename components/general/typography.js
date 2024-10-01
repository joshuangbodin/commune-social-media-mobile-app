import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import React from "react";
import { vh, vw } from "../../helpers/responsivesizes";

const CustomText = ({ text, style, color, size, isHeader, animation }) => {
  return (
    <Animated.Text
      entering={animation}
      style={[
        styles.text,
        isHeader && styles.header,
        { fontSize: size },
        { color },
        style
      ]}
    >
      {text}
    </Animated.Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: vh(1.8),
  },
  header: {
    fontSize: vh(4),
    fontWeight: "500",
  },
});
