import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { checkboxTheme } from "../components/Checkbox";
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    brand: {
      primary: {
        default: "#125EF8",
        hover: "#3979F9",
        disabled: "#6194FA",
      },
      secondary: {
        default: "#FF9E01",
      },
    },
    neutrals: {
      gray: {
        navy: "#001847",
        steel: "#405275",
        ash: "#A7B2C7",
        light: "#D9D9D9",
      },
      light: {
        100: "#FFFF",
        200: "#F7F7F9",
        300: "#ECF1FB",
        400: "#EEF4FE",
        500: "#F0F5FE",
        600: "#F2F6FD",
        700: "#F1F6FF"
      },
    },
    semantic: {
      error: {
        red: "#F15151",
      },
      success: {
        green: "#00BC8B",
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "brand.primary.default",
          _hover: { bg: "brand.primary.hover" },
          _disabled: { bg: "brand.primary.disabled" },
          color: "white",
        },
        secondary: {
          bg: "gray.400",
          color: "white",
          _hover: { bg: "gray.500" },
          _disabled: { bg: "gray.200", color: "gray.500" },
        },
      },
    },
    Checkbox: checkboxTheme,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
