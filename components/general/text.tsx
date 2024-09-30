import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { vh } from "@/helpers/responsivesizes";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { theme } from "@/constant/theme";


interface props {
  text?: string;
  isheader?: boolean;
  isSupporting?: boolean;
  isCentered?: boolean;
  style?: any;
  children?: React.ReactNode;
  size?: number;
  autosize?: boolean;
  capitalize?: boolean;
}

const CustomText = ({
  text,
  isheader = false,
  style,
  isSupporting = false,
  isCentered = false,
  children,
  size,
  autosize = false,
  capitalize = false,
}: props) => {
  if (children) {
    return (
      <Text
        style={[
          styles.text,
          isheader ? styles.headertext : isSupporting && styles.supporting,
          isCentered && { textAlign: "center" },
          style,
          size && { fontSize: size },

          capitalize && { textTransform: "capitalize" },
        ]}
      >
        {children}
      </Text>
    );
  }

  if (autosize) {
    return (
      <Text
        style={[
          styles.text,
          isheader ? styles.headertext : isSupporting && styles.supporting,
          isCentered && { textAlign: "center" },
          style,
          size && { fontSize: size },

          capitalize && { textTransform: "capitalize" },
        ]}
      >
        {text}
      </Text>
    );
  }

  return (
    <Text
      style={[
        styles.text,
        isheader ? styles.headertext : isSupporting && styles.supporting,
        isCentered && { textAlign: "center" },
        style,
        size && { fontSize: size },
        capitalize && { textTransform: "capitalize" },
      ]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: vh(2),
    color: theme.gray[900],
  },
  headertext: {
    fontSize: vh(3.5),
    color: theme.gray[900],
    fontWeight: "bold",
  },
  supporting: {
    fontSize: vh(1.8),
    color: theme.gray[400],
    fontWeight: "500",
  },
});

export default CustomText;
