import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { vh, vw } from "../../helpers/responsivesizes";
import CustomText from "../../components/general/typography";
import { router } from "expo-router";

const Header = ({title}) => {

  function goback(){
    router.back()
  }

  return (
    <View style={styles.container}>
      {/* go back */}
      <TouchableOpacity onPress={goback} style={styles.btn}>
        <Feather size={vh(4)} name="chevron-left" />
      </TouchableOpacity>

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
