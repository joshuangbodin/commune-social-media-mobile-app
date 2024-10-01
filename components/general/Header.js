import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { vh, vw } from "../../helpers/responsivesizes";
import CustomText from "../../components/general/typography";

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      {/* go back */}
      <Pressable style={styles.btn}>
        <Feather size={vh(4)} name="chevron-left" />
      </Pressable>

      {/* Title */}
      <CustomText isHeader size={vh(2.5)} text={title} />

      {/* empty */}
      <View style={{ width: vh(7.5) }}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: vh(7.5),
    width: "100%",
  },
  btn: {
    width: vh(7.5),
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
