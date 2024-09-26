import { vw } from "@/helpers/responsivesizes";
import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CarouselCards from "./CarouselCards";
import { categories } from "@/constant/constant";

const CarouselList = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{ width: vw(100), paddingLeft: 20 }}
      contentContainerStyle={{
        width: "100%",
        gap: 10,
      }}
    >
      {[...categories].map(({name , image} , index) => (
        <CarouselCards key={index} images={image} name={name} />
      ))}
    </ScrollView>
  );
};

export default CarouselList;

const styles = StyleSheet.create({});
