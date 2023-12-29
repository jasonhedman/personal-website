import React from 'react';

import {Box} from "@chakra-ui/react";

import NavLinks from "@/components/Navbar/NavLinks";

const DesktopNav = () => {
    return (
        <Box
            display={{
                base: "none",
                md: "block"
            }}
            flex={1}
        >
            <NavLinks />
        </Box>
    );
};

export default DesktopNav;
