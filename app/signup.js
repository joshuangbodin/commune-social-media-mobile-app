import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/general/Screen";
import Header from "../components/general/Header";
import { theme } from "../constants/theme";
import { vh } from "../helpers/responsivesizes";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import CustomText from "../components/general/typography";
import CustomButton from "../components/general/ButtonUi";
import { router } from "expo-router";

const signup = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [agreed, setAgreed] = useState(false);

  function toggleShowPassword() {
    setSecureTextEntry(!secureTextEntry);
  }

  function toggleTermsValue() {
    setAgreed(!agreed);
  }

  function toggleButtonDisplay(val) {
    return val ? "eye-off" : "eye";
  }

  function toggleTermsDisplay(val) {
    return val ? "check-square" : "square";
  }

  function toggleTermsColor(val) {
    return val ? theme.colors.green_400 : theme.colors.zinc_300;
  }

  function login() {
    router.push("/home");
  }

  function switchAuthpage() {
    router.push("/signup");
  }
  return (
    <ScreenWrapper style={{ padding: 10 }}>
      {/* Header */}
      <Header title={"Sign Up"} />

      {/* form */}
      <View style={styles.form}>
        {/* Name */}
        <View style={styles.input}>
          <TextInput
            style={styles.inputInner}
            placeholder="Username"
            placeholderTextColor={theme.colors.zinc_400}
          />
        </View>

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
        <Pressable style={styles.terms}>
          <View style={{ paddingTop: 5 }}>
            <TouchableOpacity onPress={toggleTermsValue}>
              <FontAwesome
                size={vh(2.3)}
                color={toggleTermsColor(agreed)}
                name={toggleTermsDisplay(agreed)}
              />
            </TouchableOpacity>
          </View>
          <CustomText
            color={theme.colors.zinc_600}
            size={vh(1.7)}
            text={
              "By creating an account you agree to out terms and conditions"
            }
          />
        </Pressable>

        {/* button to Login */}
        <View>
          <CustomButton title={"Sign Up"} />
        </View>

        {/* Redirect Link */}
        <View style={styles.link}>
          <CustomText size={vh(1.9)} text={"Already have an account?"} />
          <Pressable onPress={switchAuthpage} style={{}}>
            <CustomText
              isHeader
              size={vh(1.9)}
              color={theme.colors.green_400}
              text={"Login"}
            />
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default signup;

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

  terms: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-start",
    gap: 10,
    paddingVertical: 10,
  },
  link: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    height: vh(10),
  },
});
