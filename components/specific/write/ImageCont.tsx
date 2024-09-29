import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { vh, vw } from "@/helpers/responsivesizes";
import { theme } from "@/constant/theme";
import { Feather } from "@expo/vector-icons";
import CustomText from "@/components/general/text";

const ImageCont = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.container}>
        <Feather color={theme.green[400]} name="image" size={vh(10)}/>
        <CustomText style={{color:theme.green[400]}}>Cover Photo</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default ImageCont;

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical:20
  },
  container: {
    width: vw(93),
    height: vh(25),
    backgroundColor: theme.opaque[100](.3),
    borderRadius: 20,
    borderWidth:1,
    borderColor: theme.green[400],
    justifyContent:'center',
    alignItems:'center',
  },
});
