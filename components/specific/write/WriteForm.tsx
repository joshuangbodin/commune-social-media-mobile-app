import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { theme } from "@/constant/theme";
import { vh } from "@/helpers/responsivesizes";
import CustomText from "@/components/general/text";
import { categories } from "@/constant/constant";

const WriteForm = () => {
  return (
    <View style={styles.form}>
      <View style={styles.view}>
        <TextInput
          placeholder="Title"
          placeholderTextColor={theme.gray[400]}
          style={styles.input}
        />
      </View>
      <View style={[styles.view, styles.description]}>
        <TextInput
          placeholder="Succint Blog Description."
          placeholderTextColor={theme.gray[400]}
          style={[styles.input]}
          multiline
        />
      </View>

      <View style={styles.selectCategory}>
        <CustomText
          isSupporting
          style={{ color: theme.gray[600], marginBottom: 10 }}
        >
          Select Category
        </CustomText>
        <View style={styles.categoryCont}>
          {categories.map((category) => (
            <TouchableOpacity style={styles.category}>
              <CustomText>{category.name}</CustomText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default WriteForm;

const styles = StyleSheet.create({
  form: {
    padding: 10,
    gap: 20,
  },
  view: {
    backgroundColor: theme.primary.white,
    height: vh(8),
    borderColor: theme.gray[300],
    borderWidth: 1,
    borderRadius: 15,
    borderCurve: "continuous",
    fontSize: vh(1.8),
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  description: {
    height: vh(15),
  },
  category: {
    padding: 2,
    height: vh(4.3),
    backgroundColor: theme.gray[300],
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    paddingHorizontal: 10,
    borderRadius: 14,
    borderCurve: "continuous",
    cursor: "pointer",
  },
  categoryCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  selectCategory:{
    backgroundColor: theme.primary.white,
    padding:15,
    borderRadius: 14,
    borderCurve: "continuous",
  }
});
