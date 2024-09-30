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
          placeholderTextColor={theme.green[400]}
          style={styles.input}
        />
      </View>
      <View style={[styles.view, styles.description]}>
        <TextInput
          placeholder="Succint Blog Description."
          placeholderTextColor={theme.green[400]}
          style={[styles.input]}
          multiline
        />
      </View>

      <View>
        <CustomText isSupporting style={{ color: theme.green[600] , marginBottom:10}}>
          Select Category
        </CustomText>
        <View style={{flexDirection:'row' , flexWrap:'wrap', gap:3}}>
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
    backgroundColor: theme.opaque[100](0.2),
    height: vh(8),
    borderColor: theme.green[200],
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
  category:{
    padding: 2,
    height: vh(5),
    backgroundColor: theme.opaque[100](0.3),
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    paddingHorizontal: 10,
    borderRadius: 14,
    borderCurve: "continuous",
    cursor:'pointer'
  }
});
