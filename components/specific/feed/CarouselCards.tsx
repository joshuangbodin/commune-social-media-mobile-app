import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { vh, vw } from "@/helpers/responsivesizes";
import CustomText from "@/components/general/text";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "@/constant/theme";

interface props {
  name: string;
  images: any;
}

const CarouselCards = ({ name, images }: props) => {
  return (
    <View style={styles.card_container}>
      <Image style={styles.image} source={images} />
      <LinearGradient
        colors={["transparent", "rgba(10,10,10,.7)"]}
        style={styles.main}
      >
        <CustomText style={styles.text} text={name} />
      </LinearGradient>
    </View>
  );
};

export default CarouselCards;

const styles = StyleSheet.create({
  card_container: {
    position: "relative",
    width: vw(55),
    height: vh(30),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.opaque[100](0.3),
    borderRadius: 30,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: vw(55),
    height: vh(30),
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
    color: theme.green[50],
    fontWeight: "500",
  },
});
