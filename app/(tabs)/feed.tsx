import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import Top from "@/components/general/top";
import {
  Feather,
  FontAwesome6,
  
} from "@expo/vector-icons";
import CustomText from "@/components/general/text";
import { vh, vw } from "@/helpers/responsivesizes";
import CarouselList from "@/components/specific/feed/Carousel";
import ArticleList from "@/components/specific/feed/articleList";
import { router } from "expo-router";

const feed = () => {
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* greetings */}
        <View style={styles.greeting}>
          <CustomText isSupporting>FEED</CustomText>
          <CustomText size={vh(3.4)} isheader>
            Explore Today's
          </CustomText>
          <CustomText size={vh(3.1)} isheader>
            Articles
          </CustomText>
        </View>

        {/* search bar */}
        <Top>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/explore")}
            style={styles.searchbar}
          >
            <Feather size={vh(2.5)} name="search" />
            <TextInput
              style={styles.searchbar_input}
              placeholder="search article, writers and categories"
            ></TextInput>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bars_btn}>
            <FontAwesome6 size={vh(2.3)} color={"gray"} name="bars-staggered" />
          </TouchableOpacity>
        </Top>

        {/* Carousel */}
        <View style={{ marginVertical: 20 }}>
          <CarouselList />
        </View>

        {/* Article List */}
        <View>
          <ArticleList />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default feed;

const styles = StyleSheet.create({
  greeting: {
    paddingVertical: 20,
  },
  searchbar: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    height: vh(7),
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    borderCurve: "continuous",
  },
  searchbar_input: {
    flex: 1,
    height: "100%",
    borderRadius: 15,
    fontSize: vh(1.8)
  },
  bars_btn: {
    height: vh(7),
    backgroundColor: "lightgray",
    width: vh(6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderCurve: "continuous",
  },
});
