import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import SearchBar from "@/components/specific/explore/SearchBar";
import FilterList from "@/components/specific/explore/FilterList";
import CustomText from "@/components/general/text";
import { theme } from "@/constant/theme";
import { vh } from "@/helpers/responsivesizes";

const explore = () => {
  return (
    <ScreenWrapper>
      

      {/* Search Bar */}
      <SearchBar />

      {/* filter */}
      <FilterList />
    </ScreenWrapper>
  );
};

export default explore;

const styles = StyleSheet.create({
});
