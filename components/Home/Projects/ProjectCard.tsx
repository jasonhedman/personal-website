import React from 'react';

import {Badge, Card, Heading, HStack, Image, Stack, Text, useColorModeValue, VStack} from "@chakra-ui/react";

import {ProjectPreview} from "@/types/Project";

interface Props {
    projectPreview: ProjectPreview,
    onClick: () => void
}

const ProjectCard: React.FC<Props> = ({ projectPreview, onClick }) => {

    const hoverColor = useColorModeValue("blackAlpha.50", "whiteAlpha.300")

    return (
        <Card
            variant={'outline'}
            p={4}
            _hover={{
                shadow: 'md',
                cursor: 'pointer',
                borderColor: '#e2c273',
                transform: 'scale(1.02)',
                bg: hoverColor
            }}
            transition={'all 0.2s ease-in-out'}
            onClick={onClick}
        >
            <VStack
                alignItems={'flex-start'}
                h={'100%'}
            >
                <HStack
                    w={'100%'}
                    justifyContent={'space-between'}
                >
                    <Stack
                        direction={'column'}
                        alignItems={'flex-start'}
                        spacing={0}
                    >
                        <Heading
                            as={'h3'}
                            fontSize={{
                                base: 'md',
                                md: 'lg'
                            }}
                            fontWeight={'semibold'}
                        >
                            {projectPreview.name}
                        </Heading>
                        <Text
                            fontSize={{
                                base: 'xs',
                                md: 'sm'
                            }}
                            opacity={0.7}
                        >
                            {projectPreview.startDate}-{projectPreview.endDate}
                        </Text>
                    </Stack>
                    <Image
                        src={projectPreview.image}
                        alt={projectPreview.name}
                        boxSize={8}
                        rounded={'md'}
                    />
                </HStack>
                <Text
                    fontSize={{
                        base: 'sm',
                        md: 'md'
                    }}
                >
                    {projectPreview.description}
                </Text>
                <HStack
                    flexWrap={'wrap'}
                    mt={'auto'}
                >
                    {
                        projectPreview.showcase.map((item, index) => (
                            <Badge
                                key={index}
                            >
                                {item}
                            </Badge>
                        ))
                    }
                </HStack>
            </VStack>
        </Card>
    )
}

export default ProjectCard;
