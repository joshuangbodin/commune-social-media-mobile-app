import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/general/Screen";
import Header from "../components/general/Header";
import { theme } from "../constants/theme";
import { vh } from "../helpers/responsivesizes";
import { AntDesign, Feather } from "@expo/vector-icons";
import CustomText from "../components/general/typography";
import CustomButton from "../components/general/ButtonUi";

const login = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  function toggleShowPassword() {
    setSecureTextEntry(!secureTextEntry);
  }

  function toggleButtonDisplay(val) {
    return val ? "eye-off" : "eye";
  }

  return (
    <ScreenWrapper style={{ padding: 10 }}>
      {/* Header */}
      <Header title={"Login"} />

      {/* form */}
      <View style={styles.form}>
        {/* email */}
        <View style={styles.input}>
          <TextInput
            style={styles.inputInner}
            placeholder="Email Address"
            placeholderTextColor={theme.colors.zinc_400}
          />
        </View>

        {/* password */}
        <View style={styles.input}>
          <TextInput
            style={styles.inputInner}
            placeholder="Password"
            placeholderTextColor={theme.colors.zinc_400}
            secureTextEntry={secureTextEntry}
          />

          {/* show password btn */}
          <Pressable onPress={toggleShowPassword} style={styles.show}>
            <Feather
              size={vh(2.5)}
              color={theme.colors.zinc_400}
              name={toggleButtonDisplay(secureTextEntry)}
            />
          </Pressable>
        </View>

        {/* forgot Password? */}
        <Pressable style={styles.forgot_password}>
          <CustomText
            isHeader
            color={theme.colors.green_400}
            size={vh(1.9)}
            text={"Forgot Password?"}
          />
        </Pressable>
      </View>

      {/* button to Login */}
      <View>
        <CustomButton title={"Login"} />
      </View>

      {/* Redirect Link */}
      <View style={styles.link}>
        <CustomText size={vh(1.9)} text={"Don't have an account?"} />
        <Pressable style={{}}>
          <CustomText
            isHeader
            size={vh(1.9)}
            color={theme.colors.green_400}
            text={"Signup"}
          />
        </Pressable>
      </View>

      {/* OR: more login options */}
      <View style={styles.ordesign}>
        <View style={styles.ordesignelement} />
        <CustomText isHeader size={vh(2)} text="OR" />
        <View style={styles.ordesignelement} />
      </View>

      {/* Sign In Options */}
      <View style={styles.options}>

        {/* Google */}
        <TouchableOpacity style={styles.optioncont}>
          <AntDesign color={theme.colors.zinc_500} size={vh(3)} name="google" />
          <CustomText
            color={theme.colors.zinc_500}
            size={vh(1.8)}
            isHeader
            text={"Sign In with Google"}
          />
          <View />
        </TouchableOpacity>

          {/* Apple */}
          <TouchableOpacity style={styles.optioncont}>
          <AntDesign color={theme.colors.zinc_500} size={vh(3)} name="apple1" />
          <CustomText
            color={theme.colors.zinc_500}
            size={vh(1.8)}
            isHeader
            text={"Sign In with Apple"}
          />
          <View />
        </TouchableOpacity>

          {/* Google */}
          <TouchableOpacity style={styles.optioncont}>
          <AntDesign color={theme.colors.zinc_500} size={vh(3)} name="facebook-square" />
          <CustomText
            color={theme.colors.zinc_500}
            size={vh(1.8)}
            isHeader
            text={"Sign In with Facebook"}
          />
          <View />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default login;

const styles = StyleSheet.create({
  form: {
    marginVertical: 10,
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: theme.colors.zinc_100,
    height: vh(7.5),
    borderWidth: 1,
    borderColor: theme.colors.zinc_200,
    borderRadius: theme.curves.xl,
    borderCurve: "continuous",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  inputInner: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: vh(1.8),
    height: "100%",
  },

  show: {
    paddingHorizontal: 15,
  },

  forgot_password: {
    alignItems: "flex-end",
  },
  link: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    height: vh(10),
  },

  ordesign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ordesignelement: {
    height: vh(0.15),
    backgroundColor: theme.colors.zinc_300,
    flex: 1,
    marginHorizontal: 20,
  },
  options: {
    paddingTop: 18,
    gap:15,
  },
  optioncont: {
    height: vh(7.5),
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: theme.colors.zinc_300,
    borderRadius: theme.curves.xl,
    borderCurve: "continuous",
  },
});
