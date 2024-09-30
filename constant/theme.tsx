export const theme = {
  green: {
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#22C55E",
    600: "#16a34a",
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
  },
  gray: {
    50: "#FAFAFA",
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#A1A1AA",
    500: "#71717A",
    600: "#52525B",
    700: "#3F3F46",
    800: "#27272A",
    900: "#18181B",
  },
  opaque: {
    100: (opacity: number) => {
      return `rgba(20, 128, 60,${opacity})`;
    },
  },
  primary: {
    black: "#0000",
    white: "#fff",
    blackOpacity: (opacity: number) => {
      return `rgba(0, 0, 0,${opacity})`;
    },
    whiteOpacity: (opacity: number) => {
      return `rgba(255, 255, 255,${opacity})`;
    },
  },
};
