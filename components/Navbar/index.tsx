import React from 'react';

import {Flex, HStack, Image} from "@chakra-ui/react";

import DesktopNav from "@/components/Navbar/DesktopNav";
import MobileNav from "@/components/Navbar/MobileNav";

export const NAVBAR_HEIGHT = 48;

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
            h={`${NAVBAR_HEIGHT}px`}
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
                <MobileNav />
            </HStack>
        </Flex>
    );
};

export default Navbar;
