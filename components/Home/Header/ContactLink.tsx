import React from 'react';

import Link from "next/link";

import {Box, Icon, useColorModeValue} from "@chakra-ui/react";

import {ContactLink as ContactLinkType} from "@/types/ContactLink";

interface Props {
    contactLink: ContactLinkType
}

const ContactLink: React.FC<Props> = ({ contactLink }) => {

    const hoverBgColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");

    return (
        <Link
            href={contactLink.href}
            target={'_blank'}
        >
            <Box
                borderWidth={1}
                borderColor={'gray.300'}
                rounded={'md'}
                p={2}
                _hover={{
                    cursor: 'pointer',
                    borderColor: '#e2c273',
                    bg: hoverBgColor
                }}
                transition={'all 0.2s ease-in-out'}
                boxSize={10}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Icon
                    as={contactLink.icon}
                />
            </Box>
        </Link>
    );
};

export default ContactLink;
