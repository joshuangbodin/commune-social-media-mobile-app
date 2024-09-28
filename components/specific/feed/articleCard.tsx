import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { vh, vw } from "@/helpers/responsivesizes";
import CustomText from "@/components/general/text";
import { TouchableOpacity } from "react-native";

interface props {
  index: number;
}

const ArticleCard = ({ index }: props) => {
  return (
    <TouchableOpacity
      style={[styles.cont, index % 2 != 0 && { flexDirection: "row-reverse" }]}
    >
      <View style={styles.left}>
        <Image
          style={styles.image}
          source={require("../../../assets/appimages/signup.jpg")}
        />
      </View>
      <View style={styles.right}>
        <View style={{ gap: 10 }}>
          <CustomText size={vh(1.3)} isSupporting>
            Depression
          </CustomText>
          <CustomText size={vh(2.3)} isheader>
            Causes Of Depresssion
          </CustomText>
          <CustomText size={vh(1.6)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            ...
          </CustomText>
        </View>
        <View style={[styles.smallcont]}>
          <View style={styles.author}>
            <CustomText style={{ color: "red" }} size={vh(2)} isSupporting>
              J
            </CustomText>
          </View>
          <View>
            <CustomText isheader size={vh(1.5)}>
              Joshua Ngbodin
            </CustomText>
            <CustomText size={vh(1.3)} isSupporting>
              20 hours ago
            </CustomText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 20,
  },
  cont: {
    minHeight: vh(20),
    width: "100%",
    // overflow: "hidden",
    paddingVertical: 20,
    flexDirection: "row",
    gap: 10,
  },
  left: {
    width: "40%",
    height: "100%",
  },
  right: {
    width: "60%",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  smallcont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    gap: 10,
  },
  author: {
    backgroundColor: "pink",
    width: vh(4),
    height: vh(4),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
