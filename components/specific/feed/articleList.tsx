import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "@/components/general/text";
import { vh } from "@/helpers/responsivesizes";
import Top from "@/components/general/top";
import { Feather } from "@expo/vector-icons";
import ArticleCard from "./articleCard";

const ArticleList = () => {
  return (
    <View>
      {/* top area */}
      <Top>
        <CustomText isheader size={vh(2.4)}>
          Top Articles
        </CustomText>
        <Pressable style={styles.flex}>
          <CustomText size={vh(1.6)} isheader>
            See All
          </CustomText>
        </Pressable>
      </Top>

      {/* List */}
      <View>
        <FlatList data={[1, 2, 3]} showsVerticalScrollIndicator={false} renderItem={({item , index}) => <ArticleCard index={index}/>} />
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
