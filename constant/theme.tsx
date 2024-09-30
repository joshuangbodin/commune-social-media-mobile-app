export const theme = {
  green: {
    50:'#feffff', 
    100: "#bfcbc3",
    200: "#a9baaf",
    300: "#94a99c",
    400: "#7e9788",
    500: "#244a32",
    600: "#1c3927",
    700: "#183122",
  },
  gray: {
    50: "#fff",
    100: "#cacbcb",
  },
  opaque: {
    100: (opacity: number) => {
      return `rgba(126, 151, 136,${opacity})`;
    },
  },
};
