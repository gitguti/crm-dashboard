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
        hover: "#074DDA",
        disabled: "#6194FA",
        200: "#E3EDFD"
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
        700: "#F1F6FF",
        800:"#E5EAF5"
      },
    },
    semantic: {
      error: {
        red: "#F15151",
      },
      success: {
        200: "#00F5B4",
        600: "#00BC8B",
        800: "#00A378", 
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "brand.primary.default",
          _hover: { bg: "brand.primary.hover",
          shadow: 'md',
          transitionDuration: '0.2s',
          color: "neutrals.light.100",
          transitionTimingFunction: "ease-in-out",
          transform: 'scale(1.1)', },
          _disabled: { bg: "brand.primary.disabled" },
          color: "neutrals.light.200",
        },
        secondary: {
          bg: "semantic.success.600",
          _hover: {
          bg: "semantic.success.800",
          shadow: 'md',
          transitionDuration: '0.2s',
          color: "neutrals.light.100",
          transitionTimingFunction: "ease-in-out",
          transform: 'scale(1.1)'
          },
          _disabled: { bg: "semantic.success.200" },
          color: "neutrals.light.200",
          }
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
