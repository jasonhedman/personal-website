import React from 'react';

import {HStack, Text} from "@chakra-ui/react";

import {FaGlobe} from "react-icons/fa";

interface Props {
    location: string
}

const Location: React.FC<Props> = ({ location }) => {
    return (
        <HStack
            spacing={4}
            opacity={0.7}
        >
            <FaGlobe />
            <Text>
                {location}
            </Text>
        </HStack>
    );
};

export default Location;
