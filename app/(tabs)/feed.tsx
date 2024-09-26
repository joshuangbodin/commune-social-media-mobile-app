import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
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
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CustomText from "@/components/general/text";
import { vh } from "@/helpers/responsivesizes";
import CarouselList from "@/components/specific/feed/Carousel";
import ArticleList from "@/components/specific/feed/articleList";

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
        {/* top bar */}
        <Top>
          <TouchableOpacity style={styles.searchbar}>
            <Feather size={vh(2.5)} name="search" />
            <TextInput
              style={styles.searchbar_input}
              placeholder="search article, writers and categories"
            ></TextInput>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6 size={vh(2.5)} name="bars-staggered" />
          </TouchableOpacity>
        </Top>

        {/* Carousel */}
        <View style={{ marginVertical: 20 }}>
          <CarouselList />
        </View>

        {/* Article List */}
        <View>
          <ArticleList/>
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
    marginRight: 20,
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
  },
});
