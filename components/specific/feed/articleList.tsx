import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "@/components/general/text";
import { vh } from "@/helpers/responsivesizes";
import Top from "@/components/general/top";
import { Feather } from "@expo/vector-icons";

const ArticleList = () => {
  return (
    <View>
      {/* top area */}
      <Top>
        <CustomText isheader size={vh(2.4)}>
          Top Articles
        </CustomText>
        <Pressable style={styles.flex}>
          <CustomText size={vh(1.5)} isSupporting>
            more
          </CustomText>
          <Feather color={"gray"} name="arrow-right" size={vh(1.5)} />
        </Pressable>
      </Top>

      {/* List */}
      <View>
        <FlatList data={[]} renderItem={(item) => <View></View>} />
      </View>
    </View>
  );
};

export default ArticleList;

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
