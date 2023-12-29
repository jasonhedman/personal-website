import React from 'react';

import {Box, Divider, VStack} from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
    id: string;
}

const Section: React.FC<Props> = ({ children, id }) => {
    return (
        <VStack
            w={'100%'}
            id={id}
        >
            <Box
                as={'section'}
                p={{
                    base: 4,
                    md: 8
                }}
                w={'100%'}
                display={'flex'}
                flexDirection={'column'}
                gap={4}
            >
                {children}
            </Box>
            <Divider />
        </VStack>
    );
};

export default Section;
