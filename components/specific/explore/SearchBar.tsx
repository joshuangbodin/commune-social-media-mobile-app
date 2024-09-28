import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { vh, vw } from "@/helpers/responsivesizes";
import { theme } from "@/constant/theme";
import { Entypo, Feather, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import Top from "@/components/general/top";
import Animated, { FadeInDown } from "react-native-reanimated";

const SearchBar = () => {
  return (
    <Animated.View entering={FadeInDown}>
      {/* search bar */}
      <Top style={[styles.paddingHorizontal, { justifyContent: "flex-start" }]}>
        {/* left */}
        <View style={styles.searchbar}>
          <Feather size={vh(2)} color={theme.green[500]} name="search" />
          <TextInput
            style={styles.searchbar_input}
            placeholder="Search"
            placeholderTextColor={theme.green[300]}
          ></TextInput>
        </View>

        {/* right */}
        <TouchableOpacity style={styles.bars_btn}>
          <Entypo size={vh(2.5)} color={theme.green[50]} name="sound-mix" />
        </TouchableOpacity>
      </Top>
    </Animated.View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  searchbar: {
    flexDirection: "row",
    backgroundColor: theme.opaque[100](0.17),
    height: vh(7),
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
    borderRadius: 18,
    paddingHorizontal: 10,
    borderCurve: "continuous",
  },
  searchbar_input: {
    flex: 1,
    height: "100%",
    borderRadius: 15,
    fontSize: vh(1.8),
  },
  bars_btn: {
    height: vh(7),
    backgroundColor: theme.opaque[100](1),
    width: vh(7),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderCurve: "continuous",
  },
});
