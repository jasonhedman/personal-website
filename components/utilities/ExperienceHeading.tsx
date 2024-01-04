import React from 'react';

import {Heading, HStack, Text} from "@chakra-ui/react";

interface Props {
    headingText: string;
    startYear: number;
    endYear: number;
}

const ExperienceHeading: React.FC<Props> = ({ headingText, startYear, endYear }) => {
    return (
        <HStack
            w={'100%'}
            justifyContent={'space-between'}
            alignItems={'flex-end'}
        >
            <Heading
                as={'h3'}
                fontSize={{
                    base: 'lg',
                    md: 'xl'
                }}
                fontWeight={'semibold'}
            >
                {headingText}
            </Heading>
            <Text
                opacity={0.8}
            >
                {startYear} - {endYear}
            </Text>
        </HStack>
    );
};

export default ExperienceHeading;
