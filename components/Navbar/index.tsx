import React from 'react';

import {Flex, HStack, Image} from "@chakra-ui/react";

import DesktopNav from "@/components/Navbar/DesktopNav";
import MobileNav from "@/components/Navbar/MobileNav";
import ColorModeToggle from "@/components/Navbar/ColorModeToggle";

export const NAVBAR_HEIGHT = 72;
export const MOBILE_OFFSET = 16;

const Navbar = () => {
    return (
        <Flex
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={{
                base: 2,
                md: 4
            }}
            position={"fixed"}
            top={0}
            zIndex={200}
            maxW={"100%"}
            gap={8}
            h={{
                base: `${NAVBAR_HEIGHT - MOBILE_OFFSET}px`,
                md: `${NAVBAR_HEIGHT}px`
            }}
        >
            <Image
                src={"/logo.png"}
                alt={"Logo"}
                boxSize={{
                    base: 10,
                    md: 12
                }}
            />
            <DesktopNav />
            <HStack
                alignItems={"flex-start"}
            >
                <ColorModeToggle />
                <MobileNav />
            </HStack>
        </Flex>
    );
};

export default Navbar;
