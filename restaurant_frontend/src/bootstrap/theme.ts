import { extendTheme, theme } from "@chakra-ui/react";


// Theme customization for chakra
const Theme = extendTheme({
    ...theme,
    colors: {
        ...theme.colors,
        primary: "#000000",
        secondary: "#ECC94B",

    },
    fonts: {
    }
    , components: {
    }
});

export default Theme; 