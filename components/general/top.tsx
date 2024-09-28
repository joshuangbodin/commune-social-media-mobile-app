import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { vh } from "@/helpers/responsivesizes";

interface props {
  children: React.ReactNode;
  style?:any;
}

const top: React.FC<props> = ({ children, style }: props) => {
  return <View style={[styles.top_container,style]}>{children}</View>;
};

export default top;

const styles = StyleSheet.create({
  top_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height:vh(8),
    borderRadius: 20,
  },
});
