import { StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import CustomText from "./typography";
import { theme } from "../../constants/theme";
import { vh } from "@/helpers/responsivesizes";

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <CustomText
        isHeader
        size={vh(1.9)}
        color={theme.colors.zinc_50}
        text={title}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.green_400,
    height: vh(7.5),
    width: "100%",
    borderRadius: theme.curves.xxl,
    borderCurve: "continuous",
  },
});
