import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ScreenWrapper from "@/components/general/ScreenWrapper";
import Top from "@/components/general/top";
import { Entypo, Feather, FontAwesome6 } from "@expo/vector-icons";
import CustomText from "@/components/general/text";
import { vh, vw } from "@/helpers/responsivesizes";
import CarouselList from "@/components/specific/feed/Carousel";
import ArticleList from "@/components/specific/feed/articleList";
import { router } from "expo-router";
import { theme } from "@/constant/theme";

const feed = () => {
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* top */}
        <Top style={styles.paddingHorizontal}>
          <FontAwesome6
            size={vh(3)}
            color={theme.gray[600]}
            name="bars-staggered"
          />

          {/* user image */}
          <Image
            source={require("../../assets/appimages/feed.jpg")}
            style={styles.image}
          />
        </Top>

        {/* greetings */}
        <View style={[styles.greeting, styles.paddingHorizontal]}>
          <CustomText
            style={{ color: theme.gray[700] }}
            size={vh(3.4)}
            isheader
          >
            Discover
            <CustomText
              style={{ fontWeight: "400", marginLeft: 5 }}
              size={vh(3.4)}
            >
              Articles for your Mental Wellbeing Today
            </CustomText>
          </CustomText>
        </View>

        {/* search bar */}
        <Top
          style={[styles.paddingHorizontal, { justifyContent: "flex-start" }]}
        >
          {/* left */}
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/explore")}
            style={styles.searchbar}
          >
            <Feather size={vh(2)} color={theme.gray[400]} name="search" />
            <TextInput
              style={styles.searchbar_input}
              placeholder="Search"
              placeholderTextColor={theme.gray[400]}
            ></TextInput>
          </TouchableOpacity>

          {/* right */}
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/explore")}
            style={styles.bars_btn}
          >
            <Entypo size={vh(2.5)} color={theme.green[50]} name="sound-mix" />
          </TouchableOpacity>
        </Top>

        {/* Carousel */}
        <View style={[{ marginVertical: 20 }, styles.paddingLeft]}>
          <CarouselList />
        </View>

        {/* Article List */}
        <View style={styles.paddingHorizontal}>
          <ArticleList />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default feed;

const styles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  paddingLeft: {
    paddingLeft: 10,
  },
  greeting: {
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  searchbar: {
    flexDirection: "row",
    backgroundColor: theme.gray[200],
    height: vh(7),
    width: vw(70),
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
    cursor: "pointer",
  },
  bars_btn: {
    height: vh(7),
    backgroundColor: theme.green[700],
    width: vh(7),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderCurve: "continuous",
  },
  image: {
    backgroundColor: theme.green[100],
    width: vh(5),
    height: vh(5),
    borderRadius: 12,
    objectFit: "cover",
    borderCurve: "continuous",
  },
});
