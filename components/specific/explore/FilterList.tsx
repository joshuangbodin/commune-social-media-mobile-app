import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "@/components/general/text";
import { theme } from "@/constant/theme";
import { vh } from "@/helpers/responsivesizes";
const options = ["articles", "users", "occupation"];

interface props{
    active:boolean;
}

const FilterList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={options}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.categorycard}>
            <CustomText key={index} text={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FilterList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  list: {
    gap: 10,
  },
  categorycard: {
    padding: 2,
    height: vh(5),
    backgroundColor: theme.gray[200],
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    paddingHorizontal: 10,
    borderRadius: 14,
    borderCurve: "continuous",
    cursor:'pointer'
  },
});
