import React from 'react';

import {HStack, Text} from "@chakra-ui/react";

import {FaGlobe} from "react-icons/fa";

interface Props {
    location: string
}

const Location: React.FC<Props> = ({ location }) => {
    return (
        <HStack
            color={'blackAlpha.600'}
            spacing={4}
        >
            <FaGlobe />
            <Text>
                {location}
            </Text>
        </HStack>
    );
};

export default Location;
