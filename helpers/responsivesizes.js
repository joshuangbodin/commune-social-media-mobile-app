import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const vw = (percentage) => {
  const value = (percentage * width) / 100;
  return value;
};

export const vh = (percentage) => {
  const value = (percentage * height) / 100;
  return value;
};
