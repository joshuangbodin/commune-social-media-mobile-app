import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import Top from "@/components/general/top";
import {
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CustomText from "@/components/general/text";
import { vh } from "@/helpers/responsivesizes";

const feed = () => {
  return (
    <ScreenWrapper>
      <Top>
        <TouchableOpacity>
          <FontAwesome6 size={vh(2.5)} name="bars-staggered" />
        </TouchableOpacity>
        <CustomText style={{ fontWeight: "700" }} isheader size={vh(2.8)}>
          Feed
        </CustomText>
        <TouchableOpacity>
          <FontAwesome6 size={vh(2.5)} name="bell" />
        </TouchableOpacity>
      </Top>
    </ScreenWrapper>
  );
};

export default feed;

const styles = StyleSheet.create({});
