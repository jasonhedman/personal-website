import '@fontsource/dm-mono'
import '@fontsource-variable/dm-sans'

import {extendTheme} from "@chakra-ui/react";

import fonts from "@/theme/fonts";
import styles from "@/theme/styles";
import components from "@/theme/components";

const theme = extendTheme({
    fonts,
    styles,
    components
})

export default theme;