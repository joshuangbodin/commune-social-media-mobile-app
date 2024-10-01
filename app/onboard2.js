import { Image, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import CustomText from "../components/general/typography";
import { vh, vw } from "../helpers/responsivesizes";
import { router } from "expo-router";
const splash = require("../assets/Images/splash2.png");
import CustomButton from "../components/general/ButtonUi";

const onboard2 = () => {
  function handlePagination(id) {
    if (id == 0) {
      router.push("/onboard1");
    } else {
      router.push("/onboard2");
    }
  }

  function next() {
    router.push("/login");
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* logo */}
      <CustomText
        isHeader
        color={theme.colors.green_400}
        size={vh(2)}
        text={"Empathia"}
      />

      {/* splash Image 1 */}
      <View>
        <Image resizeMode="cover" style={styles.splash} source={splash} />
      </View>

      {/* Info */}
      <View>
        {/* text */}
        <View style={styles.info}>
          <CustomText isHeader size={vh(2.5)} text={"Find Help At"} />
          <CustomText isHeader size={vh(2.5)} text={"Needy Times Efficiently"} />
          <CustomText
            style={{ marginTop: 20 }}
            color={theme.colors.zinc_400}
            size={vh(1.8)}
            isHeader
            text={"Find people with skills you need"}
          />
          <CustomText
            color={theme.colors.zinc_400}
            size={vh(1.8)}
            isHeader
            text={"from time to time."}
          />
        </View>

        {/* pagination */}
        <View style={styles.pagination}>
          {[1, 2].map((num, index) => (
            <Pressable
              onPress={() => handlePagination(index)}
              style={[styles.pagination_btn, num == 2 && styles.active]}
              key={index}
            />
          ))}
        </View>

        {/* button */}
        <CustomButton title={"Next"} onPress={next} />
      </View>
    </SafeAreaView>
  );
};

export default onboard2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.green_50,
    justifyContent: "space-around",
    alignItems: "center",
    width: vw(100),
    height: vh(100),
  },
  splash: {
    width: vw(65),
    height: vw(65),
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    paddingVertical: 20,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    height: vh(10),
  },
  pagination_btn: {
    width: vw(2),
    height: vw(2),
    backgroundColor: theme.colors.zinc_400,
    borderRadius: theme.curves.full,
  },
  active: {
    backgroundColor: theme.colors.zinc_900,
    height: vw(4),
  },
});
