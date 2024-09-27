import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { vh, vw } from "@/helpers/responsivesizes";
import CustomText from "@/components/general/text";
import {LinearGradient} from 'expo-linear-gradient'

interface props {
  name: string;
  images: any;
}

const CarouselCards = ({ name, images }: props) => {
  return (
    <View style={styles.card_container}>
      <Image style={styles.image} source={images} />
      <LinearGradient colors={['transparent' , "rgba(10,10,10,.7)"]} style={styles.main}>
        <CustomText style={styles.text} text={name} />
      </LinearGradient>
    </View>
  );
};

export default CarouselCards;

const styles = StyleSheet.create({
  card_container: {
    position: "relative",
    width: vw(75),
    height: vh(25),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
    borderRadius: 40,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: vw(75),
    height: vh(25),
    objectFit: "cover",
    top: 0,
    left: 0,
  },
  main: {
   // backgroundColor: ,
    width: "100%",
    height: "100%",
    padding: 30,
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontWeight: "500",
  },
});
