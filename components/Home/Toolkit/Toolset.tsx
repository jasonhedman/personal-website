import React from 'react';

import {Heading, HStack, VStack} from "@chakra-ui/react";

import TagBadge from "@/components/Home/Toolkit/TagBadge";

import {TagProjects} from "@/types/TagProjects";

interface Props {
    heading: string;
    tags: TagProjects[];
}

const Toolset: React.FC<Props> = ({ heading, tags }) => {
    return (
        <VStack
            alignItems={'flex-start'}
        >
            <Heading
                fontSize={{
                    base: 'lg',
                    md: 'xl'
                }}
            >
                {heading}
            </Heading>
            <HStack
                flexWrap={'wrap'}
                spacing={2}
            >
                {
                    tags.map((tag, index) => (
                        <TagBadge
                            key={index}
                            tag={tag}
                        />
                    ))
                }
            </HStack>
        </VStack>
    );
};

export default Toolset;
