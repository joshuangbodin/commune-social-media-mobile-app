import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import SearchBar from "@/components/specific/explore/SearchBar";

const explore = () => {
  return (
    <ScreenWrapper>
      {/* Search Bar */}
      <SearchBar/>
    </ScreenWrapper>
  );
};

export default explore;

const styles = StyleSheet.create({});
