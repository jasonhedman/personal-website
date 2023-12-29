import React from 'react';

import {
    Drawer,
    DrawerBody, DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    IconButton,
    useDisclosure
} from "@chakra-ui/react";
import {TiThMenu} from "react-icons/ti";
import NavLinks from "@/components/Navbar/NavLinks";

const MobileNav = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <IconButton
                aria-label={'Open Menu'}
                icon={<TiThMenu
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />}
                onClick={onOpen}
                variant={'ghost'}
                display={{
                    base: "block",
                    md: "none"
                }}
                boxSize={10}
                p={{
                    base: 2,
                }}
            />
            <Drawer
                placement={'right'}
                onClose={onClose}
                isOpen={isOpen}
                size={'full'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader
                        px={'16px'}
                    >
                        Navigation
                    </DrawerHeader>
                    <DrawerCloseButton/>
                    <DrawerBody
                        px={0}
                    >
                        <NavLinks
                            onClick={onClose}
                        />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default MobileNav;
