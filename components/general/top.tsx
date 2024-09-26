import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { vh } from "@/helpers/responsivesizes";

interface props {
  children: React.ReactNode;
}

const top: React.FC<props> = ({ children }: props) => {
  return <View style={styles.top_container}>{children}</View>;
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
